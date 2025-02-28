<script setup lang="ts">
import Content from '@/components/Content.vue';
import Form from '@/components/forms/Form.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import PageHeading from '@/components/PageHeading.vue';
import { emptyFormPayload, FormData } from '~/forms';
import { setSeo } from '~/helpers';

setSeo(
  "Kontakt - Saferspace Slam",
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
                            <img src="@/assets/instagram_logo_simple.svg"
                                class="ml-[2px] link-colorize inline relative top-[-0.9px] h-[20px] w-[20px] mr-1" />
                        </a>
                    </div>
                    <p>
                        Dann kannst du uns gerne auf Instagram schreiben (<a class="text-link underline"
                            href="mailto:kontakt@saferspace-slam.de">saferspace_slam</a>)
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <div class="flex justify-center w-[30px] shrink-0">
                        <a href="mailto:kontakt@saferspace-slam.de">
                            <img src="@/assets/mail.svg"
                                class="ml-[2px] link-colorize inline relative top-[-0.9px] h-[24px] w-[24px] mr-1" />
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