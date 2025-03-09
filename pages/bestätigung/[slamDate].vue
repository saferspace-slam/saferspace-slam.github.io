<script setup lang="ts">
import Content from '@/components/Content.vue';
import CheckboxInput from '@/components/forms/CheckboxInput.vue';
import Form from '@/components/forms/Form.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import InstagramInline from '@/components/InstagramInline.vue';
import PageHeading from '@/components/PageHeading.vue';
import FileInput, { type FileInfo } from '~/components/forms/FileInput.vue';
import { computeData, slams } from '~/data';
import { FormData, type Payload, type PayloadGenerator } from '~/forms';
import { setSeo } from '~/helpers';

const { futureSlams } = computeData();

const slamDateRaw = useRoute().params.slamDate as string;
const slamDate = new Date(slamDateRaw);
const slamDateRendered = slamDate.toLocaleDateString("de");

setSeo(
    `Bestätigung ${slamDateRendered} - Saferspace Slam`,
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
    introductionText: string,
    pictures: FileInfo[],
    dontIncludeTexts: boolean,
    texts: FileInfo[],
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
        introductionText: "",
        pictures: [],
        dontIncludeTexts: false,
        texts: [],
    }
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
Zustimmung Ankündigung: ${data.introduction ? "Ja" : "Nein"}`,
        files: [
            ...data.pictures.map((pic, i) => {
                return {
                    data: pic.data,
                    filename: `Picture ${i}.${pic.type.split("/")[1]}`,
                    type: pic.type,
                }
            })
        ]
    }
}

const form = new FormData<PayloadGenerator<Data>, Data>("Mitmachen", { data: emptyData(), generatePayload, emptyData });
const formPayload = form.payload.value.data;

const slamDates = computed(() => futureSlams.value.map(s => s.date.toLocaleDateString("de")));
console.log({ slams, futureSlams, slamDates })
</script>

<template>
    <Content>
        <PageHeading>Bestätigung {{ slamDateRendered }}</PageHeading>

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

                <TextInput v-model="formPayload.name" display-name="Stage Name (falls vorhanden)"
                    placeholder="Der Name, mit dem du vorgestellt werden willst" type="text" />

                <TextInput v-model="formPayload.pronouns" display-name="Pronomen (falls du welche benutzt)"
                    placeholder='Deine Pronomen' type="text" />

                <TextAreaInput required v-model="formPayload.aboutMe" display-name="Inhaltliche Warnungen"
                    placeholder="Nenne hier bitte Themen in deinen Texten, die für manche Menschen schwierig sind, sodass wir im Vorfeld darüber informieren können. Beispiele wären etwa Suizid, Self-Harm oder sexuelle Übergriffe." />


                <CheckboxInput v-model="formPayload.dontIncludeTexts"
                    display-name='Ich möchte meine Texte *nicht* für hörgeschädigte Menschen bereitstellen.' />

                <FileInput v-if="!formPayload.dontIncludeTexts" required multiple
                    :file-types="['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain', '.md', '.pages', 'application/vnd.oasis.opendocument.text']"
                    v-model="formPayload.pictures" display-name="Texte für hörgeschädigte Menschen" />

                <CheckboxInput v-model="formPayload.introduction"
                    display-name='Ich möchte auf Instagram (@saferspace_slam) und auf saferspace-slam.de angekündigt werden.' />

                <template v-if="formPayload.introduction">
                    <TextInput v-model="formPayload.instagram" display-name="Instagram (optional)"
                        placeholder="Dein Instagram Account Name" type="text" />
                    <TextAreaInput required v-model="formPayload.aboutMe" display-name="Über dich"
                        placeholder="Der Text, mit dem wir dich ankündigen. Du kannst hier gerne den Über-dich Text aus deiner Anmeldung wiederverwenden." />
                    <FileInput required multiple :file-types="['image/jpeg', 'image/png', 'image/webp']"
                        v-model="formPayload.pictures" display-name="Foto / Video für die Ankündigung" />
                </template>
            </Form>
        </div>
    </Content>

</template>
<style scoped></style>