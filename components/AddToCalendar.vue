<script setup lang="ts">
import { saveTextAsFile } from '@/helpers';
import { computed, ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components'

const props = defineProps<{
    start: Date,
    end: Date,
    title: string,
    description: string,
    location: string,
}>();

const menuOpen = ref(false);

function toCompactDateString(date: Date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

function toNonCompactDateString(date: Date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}

const links = computed(() => {
    return {
        google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${props.title}&dates=${toCompactDateString(props.start)}/${toCompactDateString(props.end)}&details=${props.description}&location=${props.location}&ctz=Europe/Berlin`,
        outlook: `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&subject=${props.title}&startdt=${toNonCompactDateString(props.start)}&enddt=${toNonCompactDateString(props.end)}&body=${props.description}&location=${props.location}`,
        ics: `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:${toCompactDateString(new Date())}@saferspace-slam.de
DTSTAMP:${toCompactDateString(new Date())}
DTSTART:${toCompactDateString(props.start)}
DTEND:${toCompactDateString(props.end)}
SUMMARY:${props.title}
DESCRIPTION:${props.description}
LOCATION:${props.location}
END:VEVENT
END:VCALENDAR`
    }
})

</script>

<template>
    <div>
        <button class="text-link flex items-center cursor-pointer" v-on-click-outside="() => menuOpen = false" @click="menuOpen = !menuOpen">Zum Kalender hinzufügen
            <span v-if="menuOpen" class="material-symbols-outlined">
                keyboard_arrow_up
            </span>
            <span v-else class="material-symbols-outlined">
                keyboard_arrow_down
            </span>
        </button>
        <div class="relative">
            <div v-if="menuOpen" class="absolute top-2 flex rounded flex-col shadow shadow-black/20 w-full bg-white">
                <a class="hover:bg-gray-200 px-4 py-3" :href="links.google" target="_blank">Google</a>
                <a class="border-t-1 border-black/10 cursor-pointer hover:bg-gray-200 px-4 py-3" :href="links.outlook"
                    target="_blank">Outlook</a>
                <a class="border-t-1 border-black/10 cursor-pointer hover:bg-gray-200 px-4 py-3"
                    @click="saveTextAsFile(`Saferspace Slam ${props.start.toLocaleDateString('de')}.ics`, links.ics)">ICS-Datei</a>

            </div>
        </div>

    </div>

</template>