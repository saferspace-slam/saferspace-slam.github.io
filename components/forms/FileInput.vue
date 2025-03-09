<script setup lang="ts">
const props = defineProps<{
    displayName: string,
    fileTypes: string[],
    multiple?: boolean,
    required?: boolean,
}>();
const value = defineModel<FileInfo[]>({ required: true });

export type FileInfo = {
    filename: string,
    type: string,
    data: string,
    size: number,
}

function loadFile(file: File) {
    return new Promise<FileInfo>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            // result is of format: data:image/png;base64,<DATA>

            const dataStart = result.indexOf(",") + 1;

            const data = result.slice(dataStart);

            resolve({ type: file.type, data, filename: file.name, size: file.size })
        };
        reader.onerror = reject;
    });
}

async function updateFile(event: Event) {
    const files = (event.target! as HTMLInputElement).files ?? [];
    const fileInfos = [];
    console.log({ files });

    for (const file of files) {
        fileInfos.push(await loadFile(file))
    }
    value.value = fileInfos;

    console.log({ fileStrings: fileInfos });
}

</script>

<template>
    <label class="flex flex-col my-4">
        <span class="text-xs ml-2 text-gray-500" :class="{ 'form-label-required': props.required }">
            {{ props.displayName }}
        </span>
        <input class="cursor-pointer p-2" :required="props.required" @change="updateFile($event)"
            :accept="props.fileTypes.join(',')" :multiple="props.multiple" type="file" />
    </label>
</template>