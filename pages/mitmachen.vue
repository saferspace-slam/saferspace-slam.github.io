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
    "Mitmachen — Saferspace Slam",
    "Du möchtest bei uns auftreten? Dann findest du hier weitere Informationen und ein Formular zum Anmelden."
);

type Data = {
    name: string,
    email: string,
    phone: string,
    aboutMe: string,
    preferredDate: string,
    possibleDates: string[],
    travelExpenses: boolean,
}

function emptyData(): Data {
    return {
        name: "",
        email: "",
        phone: "",
        aboutMe: "",
        preferredDate: "",
        possibleDates: [],
        travelExpenses: false,
    }
}

function generatePayload(data: Data): Payload {
    return {
        name: data.name,
        email: data.email,
        subject: `Anmeldung ${data.preferredDate}`,
        message: `
Lieblings-Datum: <strong>${data.preferredDate}</strong><br>
Mögliche Daten: <strong>${data.possibleDates.join(", ")}</strong><br>
Fahrtkosten: <strong>${data.travelExpenses ? 'Ja' : 'Nein'}</strong><br>
Email: <strong>${data.email}</strong><br>
Handynummer: <strong>${data.phone || 'Keine'}</strong><br>
Über mich: <strong>${data.aboutMe}</strong>`,
        files: [],
    }
}

const form = new FormData<PayloadGenerator<Data>, Data>("Mitmachen", { data: emptyData(), generatePayload, emptyData });
const formPayload = form.payload.value.data;

const slamDates = computed(() => futureSlams.value.filter(s => s.open).slice(0, 5).map(s => s.date.toLocaleDateString("de")));
console.log({ slams, futureSlams, slamDates })
</script>

<template>
    <Content>
        <PageHeading>Mitmachen</PageHeading>

        <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:mt-8 flex-1">
                <p>
                    Du möchtest bei uns auftreten?
                    <br><br>
                    Wir wollen allen queeren Menschen eine Bühne geben, egal ob sie das erste mal vor Publikum sprechen
                    oder schon viel Erfahrung mitbringen. Die einzige Voraussetzung ist, dass du drei selbst
                    geschriebene Texte mitbringst und bereit bist, diese vor Publikum zu sprechen - mit oder ohne Blatt,
                    ganz wie du willst. Ansonsten sind allerdings auch keine Requisiten erlaubt.
                    <br><br>
                    Pro Termin treten bei uns sechs Poet:innen auf, deswegen trage dich bitte frühzeitig für deinen
                    Wunschtermin ein. Wenn wir da schon voll sind, werden wir dich mit Alternativen kontaktieren.
                    <br><br>
                    Am Tag des Slams bitten wir dich bereits um 18:30 Uhr vor Ort zu sein, plane also ausreichend Zeit
                    ein.
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
                <SelectMultipleInput required v-model="formPayload.possibleDates"
                    :options="slamDates" display-name="Wann könntest du auftreten?" />
                <SelectInput required v-model="formPayload.preferredDate" display-name="Lieblingsdatum"
                    placeholder="Wann möchtest du am liebsten auftreten?" :options="slamDates" />


                <TextAreaInput required v-model="formPayload.aboutMe" class="not-xs:h-50" display-name="Über dich"
                    placeholder="Erzähl uns gerne ein bisschen was über dich! Was für Texte schreibst du? Wäre das dein erster Slam oder dein hundertster Auftritt? Was motiviert dich zum Schreiben?" />
                <CheckboxInput v-model="formPayload.travelExpenses"
                    display-name='Ich brauche eine Fahrtkostenerstattung (nur mit Beleg und bis zu 50€)' />

            </Form>
        </div>
    </Content>

</template>
<style scoped></style>