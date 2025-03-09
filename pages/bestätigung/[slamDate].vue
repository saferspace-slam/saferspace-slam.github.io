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

const slamDate = new Date(useRoute().params.slamDate as string).toLocaleDateString('de');
const dueDate = new Date(new Date(useRoute().params.slamDate as string).getTime() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString('de');

setSeo(
    `Bestätigung ${slamDate} - Saferspace Slam`,
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
    pictures: FileInfo[],
    dontIncludeTexts: boolean,
    texts: FileInfo[],
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
        texts: [],
    }
}

function generatePayload(data: Data): Payload {
    return {
        name: data.name,
        email: "",
        subject: `Bestätigung ${slamDate}`,
        message: `
Name: ${data.name}
Stage Name: ${data.stageName}
Pronomen: ${data.pronouns ?? "Keine"}
Inhaltliche Warnungen: ${data.contentWarnings}
Zustimmung Ankündigung: ${data.introduction ? "Ja" : "Nein"}
Texte für Hörgeschädigte: ${data.dontIncludeTexts ? "Nein" : "Ja"}
${data.introduction ?
                `Instagram: ${data.instagram ?? "Keins"}
Über mich: ${data.aboutMe}`
                : ''}
                `,
        files: [
            ...data.pictures.map((pic, i) => {
                return {
                    data: pic.data,
                    filename: `Foto ${i + 1} - ${pic.filename}`,
                    type: pic.type,
                }
            }),
            ...data.texts.map((text, i) => {
                return {
                    data: text.data,
                    filename: `Text ${i + 1} - ${text.filename}`,
                    type: text.type,
                }
            })
        ]
    }
}

const form = new FormData<PayloadGenerator<Data>, Data>("Bestätigen", { data: emptyData(), generatePayload, emptyData });
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
                    Texte du bei uns sprechen willst. Das hat zwei Gründe: <br><br>
                <ul class="list-disc ml-6">
                    <li>
                        Einerseits wollen wir auch Menschen ermöglichen, an unserem Slam teilzuhaben, die ein
                        gesprochenes Bühnenprogramm nicht ohne weiteres verstehen können. Deswegen drucken wir die Texte
                        aller Poet:innen vorher aus und stellen sie Menschen, die sie brauchen, für die Dauer des Slams
                        zur Verfügung. Darüber hinaus teilen wir deine Texte natürlich mit niemandem! <br><br>
                    </li>
                    <li>
                        Andererseits wollen wir schon im Vorhinein ankündigen über welche potenziell retraumatisierenden
                        Themen am Abend gesprochen wird. So ermöglichen wir Menschen für sich zu entscheiden, ob sie
                        gar nicht erst kommen wollen, wenn sie sich mit diesen Themen nicht wohl fühlen.
                    </li>
                </ul>
                <br>
                Wir würden dich im Vorhinein gerne auf unserem Instagram
                <InstagramInline /> und hier auf der Website mit einem Foto oder Video und einem kurzen Text
                ankündigen. Falls du das willst (du musst nicht, um bei uns aufzutreten!), trage das bitte im Formular
                so ein. Wir verlinken auch gerne deinen Instagram-Account, deswegen kannst du den auch optional angeben.
                <br><br>
                <strong class="font-bold!">Wir freuen uns auf dich!</strong>
                </p>
            </div>
            <Form :form="form" class="flex-1">
                <TextInput required v-model="formPayload.name" display-name="Name" placeholder="Dein Name"
                    type="text" />

                <TextInput v-model="formPayload.stageName" display-name="Stage Name (falls vorhanden)"
                    placeholder="Der Name, mit dem du vorgestellt werden willst" type="text" />

                <TextInput v-model="formPayload.pronouns" display-name="Pronomen (falls du welche benutzt)"
                    placeholder='Deine Pronomen' type="text" />

                <TextAreaInput required v-model="formPayload.contentWarnings" display-name="Inhaltliche Warnungen"
                    placeholder="Nenne hier bitte Themen in deinen Texten, die für manche Menschen schwierig sind, sodass wir im Vorfeld darüber informieren können. Beispiele wären etwa Suizid, Self-Harm oder sexuelle Übergriffe." />

                <CheckboxInput v-model="formPayload.dontIncludeTexts"
                    display-name='Ich möchte meine Texte *nicht* für hörgeschädigte Menschen bereitstellen.' />

                <FileInput v-if="!formPayload.dontIncludeTexts" required multiple
                    :file-types="['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain', '.md', '.pages', 'application/vnd.oasis.opendocument.text']"
                    v-model="formPayload.texts" display-name="Texte für hörgeschädigte Menschen" />

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