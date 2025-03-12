<script setup lang="ts">
import Content from '@/components/Content.vue';
import CheckboxInput from '@/components/forms/CheckboxInput.vue';
import Form from '@/components/forms/Form.vue';
import SelectInput from '@/components/forms/SelectInput.vue';
import TextAreaInput from '@/components/forms/TextAreaInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import InstagramInline from '@/components/InstagramInline.vue';
import PageHeading from '@/components/PageHeading.vue';
import FileInput, { } from '~/components/forms/FileInput.vue';
import ToggleInput from '~/components/forms/ToggleInput.vue';
import { computeData, slams } from '~/data';
import { FormData, type Payload, type PayloadGenerator } from '~/forms';
import { setSeo } from '~/helpers';

const name = useRoute().params.name as string;

setSeo(
    `Dateiupload ${name}`,
    `Hier kannst du Dateien für uns hochladen`
);

type Data = {
    files: File[],
}

function emptyData(): Data {
    return {
        files: [],
    }
}

function generatePayload(data: Data): Payload {
    return {
        name: "Anonym",
        email: "",
        subject: name,
        message: `Dateiupload ${name}`,
        uploadAllFiles: true,
        files: [
            ...data.files.map((file, i) => {
                return {
                    name: `${name} ${i + 1} - ${file.name}`,
                    file,
                }
            })
        ]
    }
}

const form = new FormData<PayloadGenerator<Data>, Data>("Dateiupload", { data: emptyData(), generatePayload, emptyData });
const formPayload = form.payload.value.data;

</script>

<template>
    <Content>
        <PageHeading>Dateiupload {{ name }}</PageHeading>

   
            <Form :form="form" class="flex-1">

                <FileInput required multiple
                    :file-types="['*']"
                    v-model="formPayload.files"
                    display-name="Dateiupload" />

            </Form>

    </Content>

</template>
<style scoped></style>