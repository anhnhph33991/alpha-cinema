export const useCinemaStore = defineStore("cinema", () => {
  const cinemas = ref([]);
  const cinema = ref({});

  return { cinemas, cinema };
});
