<script setup lang="ts">
import AddToCalendar from '@/components/AddToCalendar.vue';
import Content from '@/components/Content.vue';
import PageHeading from '@/components/PageHeading.vue';
import { computeData } from '@/data';
import { ref, type Ref } from 'vue';
import { setSeo } from '~/helpers';

const {futureSlams, pastSlams} = computeData();

setSeo(
  "Veranstaltungen — Saferspace Slam",
  "Hier findest du unsere aktuellen und vergangenen Veranstaltungen."
);

const activePage: Ref<"future" | "past"> = ref("future");
</script>

<template>
    <Content>
        <PageHeading>Veranstaltungen</PageHeading>


        <div class="flex flex-col gap-4 mx-6">
            <div class="flex gap-3 items-center">
                <span class="material-symbols-outlined">
                    schedule
                </span>
                Jeden 3. Mittwoch im Monat um&nbsp;20:00&nbsp;Uhr (ab 2026 nur noch alle zwei Monate)
            </div>
            <a href="https://maps.app.goo.gl/vmScMdnrRQ9NGecB9" target="_blank">
                <div class="text-link flex gap-3 items-center">
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                    <span class="underline">Von-Melle-Park 5, 20146 Hamburg, Raum&nbsp;0029</span>
                </div>
            </a>
        </div>



        <div class="mt-10 bg-white rounded-xl shadow-lg shadow-black/20 flex flex-col">
            <div class="flex justify-evenly border-b-1 border-black/30">
                <div class="hover:bg-menu-background/5 hover:text-black/70 flex justify-center rounded-tl-xl group border-r-1 border-black/30 p-2 sm:p-6 grow text-center cursor-pointer"
                    :class="{
                        'not-hover:bg-menu-background/10 not-hover:text-black/50': activePage !== 'future',

                    }" @click="activePage = 'future'">
                    <p class="p-1 px-3 group-hover:border-b-1 group-hover:border-black/50"
                        :class="{ 'border-b-1 border-black/30': activePage === 'future' }">
                        Zukünftige Veranstaltungen
                    </p>
                </div>
                <div class="hover:bg-menu-background/5 hover:text-black/70 flex justify-center rounded-tr-xl group p-2 sm:p-6 grow text-center cursor-pointer" :class="{
                    'not-hover:bg-menu-background/10 not-hover:text-black/50': activePage !== 'past',

                }" @click="activePage = 'past'">
                    <p class="p-1 px-3 group-hover:border-b-1 group-hover:border-black/50"
                        :class="{ 'border-b-1 border-black/30': activePage === 'past' }">
                        Vergangene Veranstaltungen
                    </p>
                </div>
            </div>
            <div v-if="activePage == 'future'" class="px-6">
                <div v-for="slam in futureSlams" class="not-first:border-t-1 border-black/30 py-6">
                    <div class="flex flex-col lg:flex-row gap-4 justify-between">
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined">
                                    calendar_month
                                </span>
                                <p>{{ slam.date.toLocaleDateString("de") }},&nbsp;20:00&nbsp;Uhr,
                                    Einlass&nbsp;19:30&nbsp;Uhr
                                </p>
                            </div>
                            <a href="https://maps.app.goo.gl/vmScMdnrRQ9NGecB9" target="_blank">
                                <div class="text-link flex items-center gap-2">
                                    <span class="material-symbols-outlined">
                                        location_on
                                    </span>
                                    <p class="underline">Von-Melle-Park 5, 20146 Hamburg, Raum&nbsp;0029</p>
                                </div>
                            </a>
                        </div>
                        <AddToCalendar :start="slam.startDateTime" :end="slam.endDateTime" title="Saferspace Slam"
                            description="saferspace-slam.de" location="Von-Melle-Park 5, 20146 Hamburg, Raum 0029" />
                    </div>
                </div>
            </div>
            <div v-if="activePage == 'past'" class="px-6">
                <div v-for="slam in pastSlams" class="not-first:border-t-1 border-black/30 py-6">
                    <div class="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined">
                                    calendar_month
                                </span>
                                <p>{{ slam.date.toLocaleDateString("de") }},&nbsp;20:00&nbsp;Uhr,
                                    Einlass&nbsp;19:30&nbsp;Uhr
                                </p>
                            </div>
                            <a href="https://maps.app.goo.gl/vmScMdnrRQ9NGecB9" target="_blank">
                                <div class="text-link flex items-center gap-2">
                                    <span class="material-symbols-outlined">
                                        location_on
                                    </span>
                                    <p class="underline">Von-Melle-Park 5, 20146 Hamburg, Raum&nbsp;0029</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Content>

</template>

<style></style>
