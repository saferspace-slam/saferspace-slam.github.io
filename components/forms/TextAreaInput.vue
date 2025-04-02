<script setup lang="ts">
const props = defineProps<{
    displayName: string,
    placeholder: string,
    required?: boolean,
}>();
const value = defineModel<string>({ required: true });
</script>

<template>
    <label class="flex flex-col my-4 h-40">
        <span class="text-xs ml-2 text-gray-500" :class="{ 'form-label-required': props.required }">
            {{ props.displayName }}
        </span>
        <textarea class="border-b-1 border-gray-400 p-2 h-full" :required="props.required" v-model="value"
            :placeholder="props.placeholder"></textarea>
    </label>
</template>