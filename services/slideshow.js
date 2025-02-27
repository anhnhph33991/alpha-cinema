export const fetchSlideShowsService = async () => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get(`/v1/slideshows`);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
