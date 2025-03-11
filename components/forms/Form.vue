<script setup lang="ts">
import type { FormData } from '@/forms';

const { form } = defineProps<{
    form: FormData<any>
}>();

const progressBar = useTemplateRef('progressBar');
watch(form.progress, () => {
    if (form.progress.value) {
        progressBar.value!.style.translate = `-${(1 - form.progress.value) * 100}%`
    }
    else {
        progressBar.value!.style.translate = ""

    }
})

</script>

<template>
    <div>
        <form @submit.prevent="form.send"
            class="flex flex-col gap-2 bg-white sm:px-6 px-4 sm:pt-4 pt-2 sm:pb-6 pb-4 rounded-xl shadow-lg shadow-black/20">

            <slot></slot>

            <div class="flex flex-col gap-3">
                <div>
                    <div v-if="form.status.value == 'success'" class="text-green-700 flex justify-center">
                        <p class="text-green-700">Erfolgreich abgeschickt!</p>
                    </div>
                    <div v-if="form.status.value == 'serverErrror'" class="text-red-700 flex justify-center">
                        <p class="text-red-700">Fehler beim Senden. Versuche es später nochmal
                            und
                            weise uns gerne per Mail auf
                            diesen Fehler hin.</p>
                    </div>
                    <div v-if="form.status.value == 'clientError'" class="text-red-700 flex justify-center">
                        <p class="text-red-700">Fehler beim Senden. Überprüfe deine
                            Internetverbindung
                            und versuche es später
                            nochmal.</p>
                    </div>
                </div>
                <div v-show="form.progress.value" class="rounded-full overflow-hidden mx-2">
                    <div ref="progressBar" class="w-full h-2 bg-green-700"></div>
                </div>
                <button type="submit"
                    class="flex gap-2 justify-center cursor-pointer rounded-lg bg-menu-background text-white py-3 px-4">
                    <span v-show="form.status.value == 'sending'" class="absolute -translate-x-13">
                        <img src="@/assets/progress.svg" class="invert animate-spin" />
                    </span>
                    Senden
                </button>
            </div>
        </form>
    </div>
</template>