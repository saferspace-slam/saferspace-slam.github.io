<script setup lang="ts">
const props = defineProps<{
    displayName: string,
    details?: string,
    options: string[],
    required?: boolean,
}>();
const value = defineModel<string[]>({ required: true });

const values = ref(props.options.map(() => false));
watchEffect(() => {
    value.value = props.options.filter((_, i) => values.value[i]);
})
</script>

<template>
    <fieldset class="border-1 border-gray-500 px-4 my-4">
        <legend class="text-gray-500 px-2" :class="{ 'form-label-required': props.required }">{{ props.displayName }}
        </legend>
        <div class="flex flex-col gap-2 mx-1 mt-3 mb-4">
            <p v-if="props.details" class="text-gray-500 mb-2">{{ props.details }}</p>
            <label v-for="(option, i) in props.options" class="flex ml-2 items-center gap-1 cursor-pointer">
                <input class="border-b-1 border-gray-400 accent-menu-background w-4 h-4 min-w-4 cursor-pointer"
                    v-model="values[i]" type="checkbox" />
                <span class="ml-2 text-black grow-0">
                    {{ option }}
                </span>
            </label>
        </div>
    </fieldset>
    
</template>