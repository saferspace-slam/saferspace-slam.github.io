<script setup lang="ts">
const props = defineProps<{
    optionFalse: string,
    optionTrue: string,
    required?: boolean,
}>();
const value = defineModel<boolean>({ required: true });

watchEffect(() => console.log(value.value))

const id = crypto.randomUUID();
</script>

<template>
    <div class="flex items-center gap-2 mx-1 justify-center">
        <label class="text-right flex my-4 items-center gap-1 cursor-pointer mr-1">
            <input class="appearance-none cursor-pointer" :value="false" :name="id" :required="props.required"
                v-model="value" type="radio" />
            <span class="text-gray-500 grow-0" :class="{ 'form-label-required': props.required }">
                {{ props.optionFalse }}
            </span>
        </label>
        <div class="cursor-pointer bg-gray-700 rounded-full w-10 min-w-10 h-5" @click="value = !value">
            <div class="h-5 w-5 bg-white rounded-full border-3 border-gray-700 transition-all duration-100"
                :class="{ 'ml-5': value }"></div>
        </div>
        <label class="text-left flex my-4 items-center gap-1 cursor-pointer">
            <input class="appearance-none cursor-pointer" :value="true" :name="id" :required="props.required"
                v-model="value" type="radio" />
            <span class=" text-gray-500 grow-0" :class="{ 'form-label-required': props.required }">
                {{ props.optionTrue }}
            </span>
        </label>
    </div>
</template>