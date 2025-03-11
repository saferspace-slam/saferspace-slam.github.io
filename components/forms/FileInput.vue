<script setup lang="ts">
const props = defineProps<{
    displayName: string,
    fileTypes: string[],
    multiple?: boolean,
    required?: boolean,
}>();
const value = defineModel<File[]>({ required: true });

async function updateFile(event: Event) {
    const fileList = (event.target! as HTMLInputElement).files ?? [];
    const files = [];

    for (const file of fileList) {
        files.push(file)
    }
    value.value = files;

    console.log({ files });
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