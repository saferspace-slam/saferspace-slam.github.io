<script setup lang="ts">
const props = defineProps<{
    displayName: string,
    required?: boolean,
}>();
const value = defineModel<boolean>({ required: true });
</script>

<template>
    <label class="flex my-4 ml-2 items-center gap-1 cursor-pointer">
        <input class="border-b-1 border-gray-400 accent-menu-background w-4 h-4 min-w-4 cursor-pointer" :required="props.required" v-model="value" type="checkbox"/>
        <span class="ml-2 text-gray-500 grow-0" :class="{ 'form-label-required': props.required }">
            {{ props.displayName }}
        </span>
    </label>
</template>