<script setup lang="ts">
import { useStore } from './store';

import "~/assets/css/main.css"
import 'material-symbols'

const store = useStore();

if (import.meta.client) {
  window.addEventListener('scroll', () => {
    store.value.scrolled = window.scrollY > 50;
  });
}

const navActive = ref(false);
const navFullyOpen = ref(false);

// watch(navActive, () => setTimeout(() => navFullyOpen.value = navActive.value, 500))

const route = useRoute();
const onHome = computed(() => route.name === 'index');
const darkenNav = computed(() => onHome.value && !store.value.scrolled && !navActive.value);

const routes = [
  ["/", "Startseite"],
  ["/veranstaltungen", "Veranstaltungen"],
  ["/mitmachen", "Mitmachen"],
  ["/kontakt", "Kontakt"],
]

const mobileNav = ref();
watch(navActive, () => {
  if (navActive.value) {
    mobileNav.value.style.marginTop = 0;
  } else {
    console.log(mobileNav.value.offsetHeight);
    mobileNav.value.style.marginTop = `-${mobileNav.value.offsetHeight}px`;
  }
});
const loading = ref(true);
onMounted(() => {
  console.log(mobileNav.value.style);
  mobileNav.value.style.marginTop = `-${mobileNav.value.offsetHeight}px`;
  console.log(mobileNav.value.style);
  setTimeout(() => {
    loading.value = false;
  }, 1)
})


const menuItemClasses = "transition-transform duration-500 text-menu-item hover:opacity-80 outline-hover"
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen" @click="navActive = false">
    <header class="z-50 w-full top-0 lg:bg-menu-background flex justify-center"
      :class="{ 'not-hover:lg:bg-transparent': darkenNav, 'fixed': onHome, 'sticky': !onHome, 'transition-colors duration-500': !loading }">

      <div class="w-full flex justify-between max-w-[1200px] lg:items-center flex-col lg:flex-row"
        :class="{ 'lg:py-5': store.scrolled, 'lg:py-7': !store.scrolled, 'transition-all ease-in-out duration-500': !loading }">

        <div class="z-10 gap-6 pr-5 lg:pl-5 pl-7 flex justify-between items-center w-full not-lg:bg-menu-background"
          :class="{ 'not-lg:py-4': store.scrolled, 'not-lg:py-6': !store.scrolled, 'not-hover:not-lg:bg-transparent': darkenNav, 'transition-all duration-500': !loading }">
          <NuxtLink to="/">
            <img src="~/assets/logo_white.svg" class="h-5" />
          </NuxtLink>

          <button class="mr-3 lg:hidden cursor-pointer" @click.stop="navActive = !navActive">
            <svg v-if="navActive" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
              fill="#e8eaed">
              <path
                d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
              fill="#e8eaed">
              <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
            </svg>
          </button>
        </div>

        <nav ref="mobileNav" class="h-full py-7 px-5 gap-7 justify-end flex-col flex bg-menu-background" :class="{
          '!flex opacity-100': navActive, 'opacity-0': !navActive, 'lg:hidden transition-all duration-500': !loading
        }">
          <NuxtLink v-for="route in routes" :class="menuItemClasses" :to="route[0]" @click="navActive = false">{{
            route[1] }}</NuxtLink>
          <a :class="menuItemClasses" href="https://www.instagram.com/saferspace_slam/" target="_blank"
            @click="navActive = false">
            <div class="flex gap-[10px] items-center">
              <img src="~/assets/instagram_logo_simple.svg" class="h-5 ml-[2px] invert" />
              <p>saferspace_slam</p>
            </div>
          </a>
        </nav>

        <nav class="not-lg:hidden h-full px-5 gap-7 justify-end flex-row flex items-center"
          :class="{ 'duration-500 transition-all': !loading }">
          <NuxtLink v-for="route in routes" :class="menuItemClasses" :to="route[0]" @click="navActive = false">{{
            route[1] }}</NuxtLink>
          <a :class="menuItemClasses" href="https://www.instagram.com/saferspace_slam/" target="_blank"
            @click="navActive = false">
            <img src="~/assets/instagram_logo_simple.svg" class="h-5 mr-5 invert" />
          </a>
        </nav>

      </div>

    </header>

    <main class="bg-background grow-1">
      <NuxtPage />
    </main>

    <footer class="text-sm bg-menu-background p-10 !text-white flex lg:justify-center">
      <div class="flex flex-col gap-4 lg:gap-12 lg:flex-row">
        <a class="text-white" href="https://www.instagram.com/saferspace_slam/" target="_blank">
          <div class="flex gap-[14px] items-center">
            <img src="~/assets/instagram_logo_simple.svg" class="h-5 ml-[2px] invert" />
            <p>saferspace_slam</p>
          </div>
        </a>
        <div class="flex gap-3 items-center">
          <span class="material-symbols-outlined">
            schedule
          </span>
          Jeden 3. Mittwoch im Monat um&nbsp;20:00&nbsp;Uhr
        </div>
        <a href="https://maps.app.goo.gl/vmScMdnrRQ9NGecB9" class="!text-white" target="_blank">
          <div class="flex gap-3 items-center">
            <span class="material-symbols-outlined">
              location_on
            </span>
            Von-Melle-Park 5, 20146&nbsp;Hamburg, Raum&nbsp;0029
          </div>
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
}

.outline-hover:hover {
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.8);
}
</style>
