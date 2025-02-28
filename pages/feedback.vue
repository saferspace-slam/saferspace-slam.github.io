<script setup lang="ts">
import Content from '@/components/Content.vue';
import Form from '@/components/forms/Form.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import PageHeading from '@/components/PageHeading.vue';
import { emptyFormPayload, FormData } from '~/forms';
import { setSeo } from '~/helpers';

setSeo(
  "Feedback - Saferspace Slam",
  "Du hast Anmerkungen, Kritik oder Lob? Dann gib uns gerne hier Feedback!"
);

const form = new FormData("Feedback", emptyFormPayload());
const formPayload = form.payload;

</script>

<template>
    <Content>
        <PageHeading>Anonymes Feedback</PageHeading>

        <div  class="flex flex-col lg:flex-row gap-10">
            <div class="lg:mt-8 flex-1">
                <p>
                    Hast du Anmerkungen, Kritik oder Lob? Wir freuen uns über dein Feedback, das du uns hier anonym geben
                    kannst.
                    <br><br>
                    Falls du willst, dass wir dir antworten, kannst du uns aber natürlich trotzdem gerne deine Email-Adresse
                    schreiben oder unser
                    <NuxtLink to="/kontakt" class="text-link underline">Kontaktformular</NuxtLink> benutzen.
                </p>
            </div>
            <Form :form="form" class="flex-1">
                <TextAreaInput v-model="formPayload.message" required display-name="Feedback"
                    placeholder="Dein Feedback an uns" />
            </Form>
        </div>
    </Content>

</template>
<style scoped></style>