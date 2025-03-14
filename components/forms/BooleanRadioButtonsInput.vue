<script setup lang="ts">
const props = defineProps<{
    optionFalse: string,
    optionTrue: string,
    displayName: string,
    details?: string,
    required?: boolean,
}>();
const value = defineModel<boolean | undefined>({ required: true });

watchEffect(() => console.log(value.value))

const id = crypto.randomUUID();
</script>

<template>
    <fieldset class="border-1 border-menu-background px-4 my-4">
        <legend class="text-gray-500 px-2" :class="{'form-label-required': props.required}">{{ props.displayName }}</legend>
        <div class="flex flex-col gap-2 mx-1 mt-3 mb-4">
            <p v-if="props.details" class="text-red-500 mb-2 text-xs">{{ props.details }}</p>
            <label class="flex gap-3 cursor-pointer align-middle">
                <input class="cursor-pointer accent-menu-background" :value="true" :name="id" :required="props.required" v-model="value"
                    type="radio" />
                <span class=" text-black grow-0" >
                    {{ props.optionTrue }}
                </span>
            </label>
            <label class="flex gap-3 cursor-pointer mr-1 align-middle">
                <input class="cursor-pointer accent-menu-background" :value="false" :name="id" :required="props.required" v-model="value"
                    type="radio" />
                <span class="text-black grow-0">
                    {{ props.optionFalse }}
                </span>
            </label>
        </div>
    </fieldset>
</template>