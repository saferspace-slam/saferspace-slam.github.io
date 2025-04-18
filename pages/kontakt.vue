<script setup lang="ts">
import Content from '@/components/Content.vue';
import Form from '@/components/forms/Form.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import PageHeading from '@/components/PageHeading.vue';
import { emptyFormPayload, FormData } from '~/forms';
import { setSeo } from '~/helpers';

setSeo(
    "Kontakt — Saferspace Slam",
    "Du hast Fragen, Ideen, Anmerkungen, Kritik oder Lob? Dann kannst du uns gerne hier kontaktieren."
);

const form = new FormData("Kontakt", emptyFormPayload());
const formPayload = form.payload;

</script>

<template>
    <Content>
        <PageHeading>Kontakt</PageHeading>
        <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:mt-8 flex-1 flex flex-col gap-2">
                <p class="mb-4">Du möchtest bei uns auftreten? Dann findest du <NuxtLink to="/mitmachen"
                        class="text-link underline">hier weitere Informationen und ein Anmelde-Formular.</NuxtLink>
                </p>
                <p class="mb-4">Hast du Fragen, Ideen, Anmerkungen, Kritik oder Lob?</p>
                <div class="flex items-center gap-2">
                    <div class="flex justify-center w-[30px] shrink-0">
                        <a href="mailto:kontakt@saferspace-slam.de">
                            <svg class="ml-[2px] text-link inline relative top-[-0.9px] h-[20px] w-[20px] mr-1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path style="fill:currentColor"
                                    d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z" />
                                <path style="fill:currentColor"
                                    d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z" />
                                <circle style="fill:currentColor" cx="390.476" cy="121.524" r="30.23" />
                            </svg>
                        </a>
                    </div>
                    <p>
                        Dann kannst du uns gerne auf Instagram schreiben (<a class="text-link underline"
                            href="https://www.instagram.com/saferspace_slam/">saferspace_slam</a>)
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <div class="flex justify-center w-[30px] shrink-0">
                        <a href="mailto:kontakt@saferspace-slam.de">
                            <svg class="ml-[2px] text-link inline relative top-[-0.9px] h-[24px] w-[24px] mr-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill=currentColor>
                                <path
                                    d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                            </svg>
                        </a>
                    </div>
                    <p>
                        Oder per Mail an <a class="text-link underline"
                            href="mailto:kontakt@saferspace-slam.de">kontakt@saferspace-slam.de</a>
                    </p>
                </div>
                <p class="mt-4">Oder du benutzt einfach das Kontaktformular hier.
                    Wenn du keine Antwort von uns willst, musst du deinen Namen und deine Email-Adresse auch nicht
                    angeben.
                </p>
            </div>
            <Form :form="form" class="flex-1">
                <TextInput v-model="formPayload.name" display-name="Name" placeholder="Dein Name" type="text" />
                <TextInput v-model="formPayload.email" display-name="Email-Adresse" placeholder="Deine Email-Adresse"
                    type="email" />
                <TextInput v-model="formPayload.subject" required display-name="Betreff"
                    placeholder="Warum schreibst du uns?" type="text" />
                <TextAreaInput v-model="formPayload.message" required display-name="Nachricht"
                    placeholder="Deine Nachricht an uns" />
            </Form>
        </div>
    </Content>

</template>
<style scoped></style>
