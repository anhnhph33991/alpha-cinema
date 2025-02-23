import { toast } from "vue-sonner";
import {
  chooseSeatService,
  fetchMovieService,
  fetchMoviesService,
  fetchShowTimeBySlugService,
} from "~/services/movie";

export const useMovieStore = defineStore("movie", () => {
  const movies = ref([]);
  const movie = ref({});
  const showtime = ref([]);

  const fetchMovies = async () => {
    try {
      movies.value = await fetchMoviesService();
      console.log(movies.value);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const fetchMovie = async (slug) => {
    try {
      movie.value = await fetchMovieService(slug);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const fetchShowTimeBySlug = async (slug) => {
    try {
      showtime.value = await fetchShowTimeBySlugService(slug);

      // console.log(showtime.value);
      // console.log(showtime.value.data.seatMap);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const chooseSeat = async (id, seatId, userId, status) => {
    try {
      const response = await chooseSeatService(id, seatId, userId, status);

      console.log(response);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  return {
    movies,
    movie,
    fetchMovies,
    fetchMovie,
    fetchShowTimeBySlug,
    showtime,
    chooseSeat,
  };
});
