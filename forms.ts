import { ref, type Ref } from "vue"

export type Payload = {
    name: string,
    email: string,
    subject: string,
    message: string,
    files: {
        data: string,
        filename: string,
        type: string
    }[],
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

export class FormData<P extends PayloadOrGenerator<T>, T extends {} = {}> {
    formName: string;

    payload: Ref<P>
    status: Ref<FormStatus> = ref(undefined);

    constructor(formName: string, payload: P) {
        this.formName = formName;
        this.payload = ref(payload) as Ref<P>;
    }

    send = () => {
        this.status.value = "sending";

        let payload;
        if ("generatePayload" in this.payload.value) {
            payload = this.payload.value.generatePayload(this.payload.value.data);
        } else {
            payload = this.payload.value;
        }

        fetch("https://email-forms-453803557958.europe-west4.run.app", {
            method: "POST",
            body: JSON.stringify({
                key: "gDdJR6GNwfZ2Kf4GYCyExzNRm78xGvxd",
                form: this.formName,
                ...payload
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            if (response.status === 200) {
                this.status.value = "success";
                if ("generatePayload" in this.payload.value) {
                    Object.assign(this.payload.value.data, this.payload.value.emptyData());
                } else {
                    Object.assign(this.payload.value, emptyFormPayload())
                };
            } else {
                this.status.value = 'serverErrror'
            }
        }
        ).catch(() => {
            this.status.value = 'clientError';
        });
    }
}
