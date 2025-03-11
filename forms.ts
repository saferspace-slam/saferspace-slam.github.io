import { ref, type Ref } from "vue"

export type Payload = {
    name: string,
    email: string,
    subject: string,
    message: string,
    files: { name: string, file: File }[],
}

export type PayloadGenerator<T> = {
    data: T,
    generatePayload: (t: T) => Payload,
    emptyData: () => T,
}

type PayloadOrGenerator<T = {}> = Payload | PayloadGenerator<T>;

export type FormStatus = "success" | "clientError" | "serverErrror" | "sending" | undefined;

export function emptyFormPayload(): Payload {
    return {
        name: "",
        email: "",
        message: "",
        subject: "",
        files: [],
    }
}

export type AttachedFileInfo = {
    filename: string,
    type: string,
    data: string,
    size: number,
}

function loadFileForAttachement(file: File, name: string) {
    return new Promise<AttachedFileInfo>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            // result is of format: "data:image/png;base64,<DATA>"  

            const dataStart = result.indexOf(",") + 1;

            const data = result.slice(dataStart);

            resolve({ type: file.type, data, filename: name, size: file.size })
        };
        reader.onerror = reject;
    });
}


export class FormData<P extends PayloadOrGenerator<T>, T extends {} = {}> {
    formName: string;

    payload: Ref<P>
    status: Ref<FormStatus> = ref(undefined);
    progress: Ref<number | undefined> = ref(undefined);

    constructor(formName: string, payload: P) {
        this.formName = formName;
        this.payload = ref(payload) as Ref<P>;
    }

    send = async () => {
        this.status.value = "sending";

        let payload;
        if ("generatePayload" in this.payload.value) {
            payload = this.payload.value.generatePayload(this.payload.value.data);
        } else {
            payload = this.payload.value;
        }

        let filesToAttach = payload.files.sort((a, b) => b.file.size - a.file.size); // sort descending
        let filesToUpload = [];

        while (filesToAttach.map(f => f.file.size).reduce((partialSum, a) => partialSum + a, 0) >= 10_000_000) {
            filesToUpload.push(filesToAttach.splice(0, 1)[0]);
        }

        const attachedFiles = await Promise.all(filesToAttach.map(f => loadFileForAttachement(f.file, f.name)));
        console.log({ attachedFiles });
        const sendAPIRequest = (body: object, onSuccess: (response: Response,
            clientError: () => void,
            serverError: () => void
        ) => Promise<void>,
        ) => {
            return new Promise<void>((resolve, reject) => {
                const clientError = () => {
                    this.status.value = 'clientError';
                    reject('clientError')
                };
                const serverError = () => {
                    this.status.value = 'serverErrror';
                    reject('serverError')
                };

                fetch("https://email-forms-453803557958.europe-west4.run.app", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(async response => {
                    if (response.status === 200) {
                        await onSuccess(response, clientError, serverError);
                        resolve()
                    } else {
                        serverError();
                    }
                }
                ).catch(() => {
                    clientError()
                });
            });
        }

        const uploadedFiles: { publicUrl: string, name: string }[] = [];

        if (filesToUpload.length) {
            let totalFullyUploaded = 0;
            const totalSize = filesToUpload.map(f => f.file.size).reduce((p, c) => p + c);

            await sendAPIRequest({
                key: "gDdJR6GNwfZ2Kf4GYCyExzNRm78xGvxd",
                action: "upload-files",
                files: filesToUpload.map(f => { return { name: f.name } }),
            }, async (response, clientError, serverError) => {
                const body = await response.json() as { files: { uploadUri: string, publicUrl: string }[] };

                for (let i = 0; i < body.files.length; i++) {
                    const uploadUri = body.files[i].uploadUri;
                    const publicUrl = body.files[i].publicUrl;
                    const name = filesToUpload[i].name;
                    const file = filesToUpload[i].file;

                    const chunkSize = 8 * 1024 * 1024; // 8 MiB
                    let start = 0;
                    let tries = 0;
                    const maxTries = 5;

                    while (start < file.size) {
                        console.log({ start, size: file.size });

                        const end = Math.min(start + chunkSize, file.size);
                        const chunk = file.slice(start, end);

                        try {
                            const xhr = new XMLHttpRequest();
                            xhr.open("PUT", uploadUri);
                            xhr.setRequestHeader("Content-Range", `bytes ${start}-${end - 1}/${file.size}`);
                            xhr.setRequestHeader("Content-Type", file.type);

                            xhr.upload.onprogress = e => {
                                console.log(`Uploaded ${start + e.loaded} of ${file.size}`);
                                this.progress.value = (totalFullyUploaded + start + e.loaded) / totalSize;
                            }

                            const waitForResponse = new Promise<void>((resolve, reject) => {
                                xhr.onload = () => {
                                    if (xhr.status === 200) {
                                        console.log(`Uploaded ${name}`);
                                        start = end;
                                        tries = 0;
                                        resolve()
                                    } else if (xhr.status === 308) {
                                        const rangeHeader = xhr.getResponseHeader('Range')!;
                                        start = parseInt(rangeHeader.split('-')[1]) + 1;
                                        tries = 0;
                                        resolve()
                                    } else {
                                        reject(`Upload failed: ${xhr.status} ${xhr.response}`)
                                    }
                                }
                                xhr.onerror = e => {
                                    reject(e)
                                }
                            })

                            xhr.send(chunk);

                            await waitForResponse;
                        } catch (error) {
                            console.error('Upload error:', error);

                            tries++;
                            if (tries > maxTries) {
                                clientError();
                                return;
                            }

                            await new Promise(resolve => setTimeout(resolve, 2000))
                        }
                    }
                    uploadedFiles.push({ publicUrl, name });
                    totalFullyUploaded += file.size;
                }
            })
        }

        await sendAPIRequest({
            key: "gDdJR6GNwfZ2Kf4GYCyExzNRm78xGvxd",
            action: 'submit',
            form: this.formName,
            name: payload.name,
            email: payload.email,
            subject: payload.subject,
            message: payload.message + '<br><br>' + uploadedFiles.map(f => `<a href="${f.publicUrl}">${f.name}</a>`).join("<br>"),
            files: attachedFiles,
        }, async () => {
            this.status.value = "success";
            if ("generatePayload" in this.payload.value) {
                Object.assign(this.payload.value.data, this.payload.value.emptyData());
            } else {
                Object.assign(this.payload.value, emptyFormPayload())
            };
        })

        this.progress.value = undefined;
    }
}
