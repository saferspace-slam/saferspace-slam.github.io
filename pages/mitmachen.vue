<script setup lang="ts">
import Content from '@/components/Content.vue';
import CheckboxInput from '@/components/forms/CheckboxInput.vue';
import Form from '@/components/forms/Form.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import InstagramInline from '@/components/InstagramInline.vue';
import PageHeading from '@/components/PageHeading.vue';
import { computeData, slams } from '~/data';
import { FormData, type Payload, type PayloadGenerator } from '~/forms';
import { setSeo } from '~/helpers';

const { futureSlams } = computeData();

setSeo(
  "Mitmachen - Saferspace Slam",
  "Du möchtest bei uns auftreten? Dann findest du hier weitere Informationen und ein Formular zum Anmelden."
);

type Data = {
    name: string,
    pronouns: string,
    email: string,
    instagram: string,
    aboutMe: string,
    slamDate: string,
    introduction: boolean,
}

function generatePayload(data: Data): Payload {
    return {
        name: data.name,
        email: data.email,
        subject: `${data.name}`,
        message: `
Pronomen: ${data.pronouns || "keine"}
Instagram: ${data.instagram}
Über mich: ${data.aboutMe}
Slam-Datum: ${data.slamDate}
Zustimmung Ankündigung: ${data.introduction ? "Ja" : "Nein"}`
    }
}

function emptyData(): Data {
    return {
        name: "",
        pronouns: "",
        email: "",
        instagram: "",
        aboutMe: "",
        slamDate: "",
        introduction: false,
    }
}

const form = new FormData<PayloadGenerator<Data>, Data>("Mitmachen", { data: emptyData(), generatePayload, emptyData });
const formPayload = form.payload.value.data;

const slamDates = computed(() => futureSlams.value.map(s => s.date.toLocaleDateString("de")));
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
                    Wir würden dich im Vorhinein gerne auf unserem Instagram
                    <InstagramInline /> und hier auf der Website mit deinem
                    "Über
                    dich"-Text ankündigen. Falls du das willst (du musst nicht, um bei uns aufzutreten!),
                    stimme dem bitte im Formular zu. Wir verlinken auch gerne deinen Instagram-Account, deswegen kannst
                    du den hier auch optional angeben.
                    <br><br>
                    Wir freuen uns auf dich!
                </p>
            </div>
            <Form :form="form" class="flex-1">
                <TextInput required v-model="formPayload.name" display-name="Name" placeholder="Dein Name"
                    type="text" />
                <TextInput v-model="formPayload.pronouns" display-name="Pronomen, falls du welche benutzt"
                    placeholder='Deine Pronomen' type="text" />
                <TextInput required v-model="formPayload.email" display-name="Email-Adresse"
                    placeholder="Deine Email-Adresse" type="text" />
                <TextInput v-model="formPayload.instagram" display-name="Instagram"
                    placeholder="Dein Instagram Account Name" type="text" />
                <SelectInput required v-model="formPayload.slamDate" display-name="Slam-Datum"
                    placeholder="Wann möchtest du auftreten?" :options="slamDates" />
                <TextAreaInput required v-model="formPayload.aboutMe" display-name="Über dich"
                    placeholder="Erzähl uns gerne ein bisschen was über dich! Was für Texte schreibst du? Wäre das dein erster Slam oder dein hundertster Auftritt? Was motiviert dich zum Schreiben?" />
                <CheckboxInput v-model="formPayload.introduction"
                    display-name='Ich möchte auf Instagram (@saferspace_slam) und auf saferspace-slam.de mit meinem "Über mich"-Text angekündigt werden.' />
            </Form>
        </div>
    </Content>

</template>
<style scoped></style>