<script setup lang="ts">
const props = defineProps<{
    displayName: string,
    placeholder: string,
    type: "text" | "email",
    required?: boolean,
}>();
const value = defineModel<string>({ required: true });
</script>

<template>
    <label class="flex flex-col my-4">
        <span class="text-xs ml-2 text-gray-500" :class="{ 'form-label-required': props.required }">
            {{ props.displayName }}
        </span>
        <input class="border-b-1 border-gray-400 p-2" :required="props.required" v-model="value" :type="props.type"
            :placeholder="props.placeholder" />
    </label>
</template>