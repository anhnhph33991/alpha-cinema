import { fetchSlideShowsService } from "~/services/slideshow";

export const useSlideShowStore = defineStore("slideshow", () => {
  const slideshows = ref([]);

  const fetchSlideShows = async () => {
    try {
      const response = await fetchSlideShowsService();

      slideshows.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { slideshows, fetchSlideShows };
});
