<script setup lang="ts">
import Content from '@/components/Content.vue';
import CheckboxInput from '@/components/forms/CheckboxInput.vue';
import Form from '@/components/forms/Form.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import PageHeading from '@/components/PageHeading.vue';
import SelectMultipleInput from '~/components/forms/SelectMultipleInput.vue';
import { computeData, slams } from '~/data';
import { FormData, type Payload, type PayloadGenerator } from '~/forms';
import { setSeo } from '~/helpers';

const { futureSlams } = computeData();

setSeo(
    "Schreibnachmittag — Saferspace Slam",
    "Wir machen am 13.7. einen Schreibnachmittag und hier kannst du dich anmelden."
);

type Data = {
    name: string,
    email: string,
    phone: string,
    allergies: string,
}

function emptyData(): Data {
    return {
        name: "",
        email: "",
        phone: "",
        allergies: "",
    }
}

function generatePayload(data: Data): Payload {
    return {
        name: data.name,
        email: data.email,
        subject: `Anmeldung Workshop 13.7.`,
        message: `
Email: <strong>${data.email}</strong><br>
Handynummer: <strong>${data.phone || 'Keine'}</strong><br>
Allergien: <strong>${data.allergies}</strong>`,
        files: [],
    }
}

const form = new FormData<PayloadGenerator<Data>, Data>("Workshop", { data: emptyData(), generatePayload, emptyData });
const formPayload = form.payload.value.data;

const slamDates = computed(() => futureSlams.value.filter(s => s.open).slice(0, 5).map(s => s.date.toLocaleDateString("de")));
console.log({ slams, futureSlams, slamDates })
</script>

<template>
    <Content>
        <PageHeading>Schreibnachmittag 13.7.</PageHeading>

        <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:mt-8 flex-1">
                <p>
                    Wir organisieren am Sonntag, den 13.7., einen gemeinsamen Schreibnachmittag und hier kannst du dich
                    dafür anmelden!
                    <br><br>
                    Es geht um 15 Uhr los und wird bis etwa 20 Uhr gehen. Wir treffen uns im AStA Trakt der Uni Hamburg
                    im Raum 0029
                    <a href="https://maps.app.goo.gl/vmScMdnrRQ9NGecB9" target="_blank">
                        (<span class="underline text-link">Von-Melle-Park 5, 20146 Hamburg</span>).
                    </a>
                    <br><br>
                    Wir werden euch einige Impulse geben, aber hauptsächlich geht es darum, gemeinsam ins kreative
                    Schreiben zu kommen. Falls ihr wollt, könnt ihr eure Texte dann beim Slam am 16.7. vortragen, das
                    müsst ihr aber nicht, um am Schreibnachmittag teilzunehmen.
                    <br><br>
                    Es wird Snacks geben, also schreib gerne ins Formular, falls du irgendwelche Allergien hast.
                    <br><br>
                    Wir können leider nur 15 Anmeldungen annehmen, deswegen trage dich gerne frühzeitig ein, wir werden
                    dir dann eine Mail schicken, ob es geklappt hat. Falls nicht, planen wir aber im Herbst einen
                    weiteren Schreibnachmittag zu machen und können dich da dann gerne schon auf die Liste setzen.
                    <br><br>
                    Wir freuen uns auf dich!
                </p>
            </div>
            <Form :form="form" class="flex-1">
                <TextInput required v-model="formPayload.name" display-name="Name" placeholder="Dein Name"
                    type="text" />
                <TextInput required v-model="formPayload.email" display-name="Email-Adresse"
                    placeholder="Deine Email-Adresse" type="text" />
                <TextInput v-model="formPayload.phone" display-name="Handynummer (optional, aber hilfreich)"
                    placeholder="Deine Handynummer" type="text" />
                <TextInput v-model="formPayload.allergies" display-name="Allergien, falls vorhanden"
                    placeholder="Deine Allergien" type="text" />


            </Form>
        </div>
    </Content>

</template>
<style scoped></style>