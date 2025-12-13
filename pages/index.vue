<script setup lang="ts">
import Content from '~/components/Content.vue';
import Instagram from '~/components/Instagram.vue';
import InstagramInline from '~/components/InstagramInline.vue';
import PageHeading from '~/components/PageHeading.vue';
import { ref } from 'vue';
import { useStore } from '~/store';
import { setSeo } from '~/helpers';
import { computeData } from '~/data';

setSeo(
  "Saferspace Slam",
  "Queerer Poetry Slam in Hamburg, jeden 3. Mittwoch im Monat um 20 Uhr"
);

const { nextSlam } = computeData();

const backgroundPicture = computed(() => `/${nextSlam.value?.homePicture ?? 'home.jpg'}`);

const store = useStore();
const startOfContent = ref();

const date: Ref<Date | undefined> = ref(undefined);
onMounted(() => {
  date.value = new Date();
});
</script>

<template>
  <img :src="backgroundPicture" class="h-screen w-screen object-cover object-[50%_32%]">
  <div class="absolute top-0 h-screen w-full flex flex-col justify-center">
    <div class="flex justify-center m-5">
      <div class="flex flex-col items-center">
        <img src="~/assets/logo_white.svg" class="h-12" />
        <p class="mt-10 text-center text-xl !text-white">Queerer Poetry Slam in Hamburg</p>
        <p class="mt-3 text-center text-xl !text-white">Nächster Termin am {{ nextSlam?.date.toLocaleDateString("de") }}Achtung! Der Slam am 17.12. muss leider ausfallen.</p>
        <p class="mt-3 text-center text-xl !text-white" v-if="date && date <= new Date('2025-12-18')">Achtung! Der Slam am 17.12. muss leider ausfallen.</p>
      </div>
      <button ref="startOfContent"
        class="motion-safe:animate-bounce absolute bottom-0 opacity-50 hover:opacity-100 cursor-pointer"
        v-if="!store.scrolled" @click="() => startOfContent.scrollIntoView({ behaviour: 'smooth' })">
        <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="white">
          <path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z" />
        </svg>
      </button>
    </div>
  </div>

  <Content>
    <PageHeading>STARTSEITE</PageHeading>
    <div class="lg:flex gap-10 justify-center">
      <img src="~/assets/leo_home.jpg" class="lg:w-100" alt="">

      <p class="text-lg mt-10">
        Du hast Lust auf einen ganz besonderen literarischen Abend voller Emotionen, gesprochener Worte und queerer
        Gedanken? <br><br>

        Dann ist dieser Poetryslam genau die richtige Veranstaltung für dich. Hier erwarten dich Slamer:innen, die sich
        mit selbstgeschriebenen Texten auf die Bühne stellen, um sie mit dem Publikum zu teilen. Lustige und traurige,
        lyrische und prosaische, laute und leise Texte. Ein Safespace für alle, die gerade einen brauchen. <br><br>

        Wir bemühen uns um möglichst viel Barrierefreiheit, genauere Infos findet ihr
        auf
        <InstagramInline />.

      </p>
    </div>
  </Content>
</template>

<style>
*,
html {

  scroll-behavior: smooth !important;
}
</style>
