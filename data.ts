const data = await import("@/data.json");

export const slams = data.slams.map(s => {
    const startDateTime = new Date(s.date);
    startDateTime.setHours(20, 0, 0);
    const endDateTime = new Date(s.date);
    endDateTime.setHours(23, 0, 0);
    return {
        ...s,
        date: new Date(s.date),
        startDateTime, endDateTime
    }
});

type Slam = typeof slams[0];

export const computeData = () => {
    const futureSlams: Ref<Slam[]> = ref([]);
    const pastSlams: Ref<Slam[]> = ref([]);

    onMounted(() => {
        futureSlams.value = slams.filter(s => s.date >= new Date());
        pastSlams.value = slams.filter(s => s.date < new Date()).sort().reverse();
    });

    return { futureSlams, pastSlams }
}