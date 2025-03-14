<script setup lang="ts">
const props = defineProps<{
    displayName: string,
    placeholder: string,
    required?: boolean,
    options: string[],
}>();
const value = defineModel<string>({ required: true });

value.value = props.placeholder;
</script>

<template>
    <label class="flex flex-col my-4">
        <span class="text-xs ml-2 text-gray-500" :class="{ 'form-label-required': props.required }">
            {{ props.displayName }}
        </span>
        <select class="border-b-1 border-gray-400 p-2 w-full" :class="{ 'text-current/50': value == placeholder }"
            v-model="value" :required="props.required">
            <option disabled selected>{{ placeholder }}</option>
            <option v-for="option in options">{{ option }}</option>
        </select>
    </label>
</template>