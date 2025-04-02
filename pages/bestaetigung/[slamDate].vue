<script setup lang="ts">
import Content from '@/components/Content.vue';
import CheckboxInput from '@/components/forms/CheckboxInput.vue';
import Form from '@/components/forms/Form.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import InstagramInline from '@/components/InstagramInline.vue';
import PageHeading from '@/components/PageHeading.vue';
import BooleanRadioButtonsInput from '~/components/forms/BooleanRadioButtonsInput.vue';
import FileInput from '~/components/forms/FileInput.vue';
import ToggleInput from '~/components/forms/ToggleInput.vue';
import { computeData, slams } from '~/data';
import { FormData, type Payload, type PayloadGenerator } from '~/forms';
import { setSeo } from '~/helpers';

const { futureSlams } = computeData();

const slamDate = new Date(useRoute().params.slamDate as string).toLocaleDateString('de', {dateStyle: 'long'});
const dueDate = new Date(new Date(useRoute().params.slamDate as string).getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('de');

setSeo(
    `Bestätigung ${slamDate} — Saferspace Slam`,
    `Bestätige hier bitte deinen Auftritt am ${slamDate} bei uns`
);

type Data = {
    name: string,
    stageName: string,
    pronouns: string,
    contentWarnings: string,
    instagram: string,
    aboutMe: string,
    introduction: boolean,
    introductionText: string,
    pictures: File[],
    dontIncludeTexts: boolean,
    textsUploadFiles: boolean,
    photoConsent: boolean | undefined,
    publishConsent: boolean | undefined,
    usePreviousIntroduction: boolean,
    textsText: string,
    textsFiles: File[],
}

function emptyData(): Data {
    return {
        name: "",
        stageName: "",
        pronouns: "",
        contentWarnings: "",
        instagram: "",
        aboutMe: "",
        introduction: false,
        introductionText: "",
        pictures: [],
        dontIncludeTexts: false,
        textsUploadFiles: true,
        photoConsent: undefined,
        publishConsent: undefined,
        usePreviousIntroduction: false,
        textsText: "",
        textsFiles: [],
    }
}

function generatePayload(data: Data): Payload {
    return {
        name: data.name,
        email: "",
        subject: slamDate,
        message: `<br><br>
Name: <strong>${data.name}</strong><br>
Stage Name: <strong>${data.stageName || "Keiner"}</strong><br>
Pronomen: <strong>${data.pronouns || "Keine"}</strong><br>
Inhaltliche Warnungen: <strong>${data.contentWarnings}</strong><br>
Zustimmung Ankündigung: <strong>${data.introduction ? "Ja" : "Nein"}</strong><br>
Zustimmung Fotos/Videos: <strong>${data.photoConsent ? "Ja" : "Nein"}</strong><br>
Zustimmung Veröffentlichung Fotos/Videos: <strong>${data.publishConsent ? "Ja" : "Nochmal nachfragen"}</strong><br>
${(data.introduction && data.usePreviousIntroduction) ? "<strong>Ich will angekündigt werden wie letztes mal</strong><br>" : ""}
Texte für Hörgeschädigte: <strong>${data.dontIncludeTexts ? "Nein" : "Ja"}${!data.textsUploadFiles ? `<br><br>${data.textsText}` : ''}</strong><br>

${data.introduction ?
                `Instagram: <strong>${data.instagram || "Keins"}</strong><br>
Über mich: <strong>${data.aboutMe}</strong>`
                : ''}
                `,
        files: [
            ...(data.pictures.length ? [{ name: `${data.name} Foto/Video - ${data.pictures[0].name}`, file: data.pictures[0] }] : []),
            ...data.textsFiles.map((file, i) => {
                return {
                    name: `${data.name} Text ${i + 1} - ${file.name}`,
                    file,
                }
            })
        ]
    }
}

const form = new FormData<PayloadGenerator<Data>, Data>("Bestätigung", { data: emptyData(), generatePayload, emptyData });
const formPayload = form.payload.value.data;

const slamDates = computed(() => futureSlams.value.map(s => s.date.toLocaleDateString("de")));
console.log({ slams, futureSlams, slamDates })
</script>

<template>
    <Content>
        <PageHeading>Bestätigung {{ slamDate }}</PageHeading>

        <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:mt-8 flex-1">
                <p>
                    Wir freuen uns sehr, dass du am {{ slamDate }} bei uns auftrittst!
                    <br><br>
                    Wir haben auf jeden Fall schon einen Platz für dich reserviert, aber um dich tatsächlich fest
                    einzuplanen, brauchen wir jetzt im Vorhinein noch ein paar Informationen von dir, <strong
                        class="font-bold!">deswegen fülle dieses Formular bitte spätestens bis zum {{ dueDate }}
                        aus</strong>.
                    <br><br>
                    Stage Name und Pronomen fragen wir dich, damit wir wissen wie wir dich am Tag des Slams ankündigen
                    sollen.
                    <br><br>
                    Anders als viele andere Slams bitten wir dich, dir schon im Vorhinein fest zu überlegen, welche
                    Texte du bei uns sprechen willst. Denn indem wir alle Texte ausdrucken und sie allen, die sie
                    brauchen, für die Dauer des Slams zur Verfügung stellen, wollen wir auch Menschen ermöglichen, an
                    unserem Slam teilzuhaben, die ein gesprochenes Bühnenprogramm nicht ohne weiteres verstehen können.
                    <br><br>
                    Wir würden dich im Vorhinein gerne auf unserem Instagram
                    <InstagramInline /> und hier auf der Website mit einem Foto oder Video und einem kurzen Text
                    ankündigen. Falls du das willst (du musst nicht, um bei uns aufzutreten!), trage das bitte im
                    Formular so ein. Wir verlinken auch gerne deinen Instagram-Account, deswegen kannst du den auch
                    optional angeben.
                    <br><br>
                    <strong class="font-bold!">Wir freuen uns auf dich!</strong>
                </p>
            </div>
            <Form :form="form" class="flex-1">
                <TextInput required v-model="formPayload.name" display-name="Name" placeholder="Dein Name"
                    type="text" />

                <TextInput v-model="formPayload.stageName"
                    display-name="Mit welchem Namen willst du vorgestellt werden? (optional)"
                    placeholder="Dein Stage Name" type="text" />

                <TextInput v-model="formPayload.pronouns" display-name="Pronomen (falls du welche benutzt)"
                    placeholder='Deine Pronomen' type="text" />

                <CheckboxInput v-model="formPayload.dontIncludeTexts"
                    display-name='Ich möchte meine Texte *nicht* für hörgeschädigte Menschen bereitstellen.' />

                <TextAreaInput class="not-xs:h-50" required v-if="formPayload.dontIncludeTexts"
                    v-model="formPayload.contentWarnings" display-name="Content Notes"
                    placeholder="Nenne hier bitte Themen in deinen Texten, die für manche Menschen potenziell retraumatisierend sind. So können wir im Vorhinein darüber informieren." />

                <ToggleInput v-if="!formPayload.dontIncludeTexts" v-model="formPayload.textsUploadFiles"
                    option-false='Texte reinkopieren' option-true="Texte als Dateien hochladen" />

                <TextAreaInput v-if="!formPayload.dontIncludeTexts && !formPayload.textsUploadFiles" required
                    v-model="formPayload.textsText" display-name="Texte für hörgeschädigte Menschen"
                    placeholder="Kopiere hier bitte deine Texte rein" />

                <FileInput v-if="!formPayload.dontIncludeTexts && formPayload.textsUploadFiles" required multiple
                    :file-types="['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain', '.md', '.pages', 'application/vnd.oasis.opendocument.text']"
                    v-model="formPayload.textsFiles"
                    display-name="Texte für hörgeschädigte Menschen (mehrere auswählbar)" />

                <BooleanRadioButtonsInput option-false="Nein, ich stimme nicht zu" option-true="Ja, ich stimme zu"
                    v-model="formPayload.photoConsent"
                    :display-name="`Dürfen wir während des Slams Fotos und Videos von dir aufnehmen?`" required />

                <BooleanRadioButtonsInput v-if="formPayload.photoConsent" option-false="Fragt vorher nochmal nach"
                    option-true="Ja, ich stimme zu" v-model="formPayload.publishConsent"
                    :display-name="`Dürfen wir Fotos und Videos von dir auf Instagram und hier auf der Website veröffentlichen?`"
                    required />

                <CheckboxInput v-model="formPayload.introduction"
                    display-name='Ich möchte auf Instagram (@saferspace_slam) und auf saferspace-slam.de angekündigt werden.' />

                <template v-if="formPayload.introduction">
                    <CheckboxInput v-model="formPayload.usePreviousIntroduction"
                        display-name="Ich bin schon mal aufgetreten und will angekündigt werden wie letztes mal." />

                    <template v-if="!formPayload.usePreviousIntroduction">
                        <TextInput v-model="formPayload.instagram" display-name="Instagram (optional)"
                            placeholder="Dein Instagram Account Name" type="text" />
                        <TextAreaInput required v-model="formPayload.aboutMe" display-name="Über dich"
                            placeholder="Der Text, mit dem wir dich ankündigen. Du kannst hier gerne den Über-dich Text aus deiner Anmeldung wiederverwenden." />
                        <FileInput required
                            :file-types="['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/mpeg']"
                            v-model="formPayload.pictures" display-name="Foto / Video für die Ankündigung" />
                    </template>
                </template>
            </Form>
        </div>
    </Content>

</template>
<style scoped></style>