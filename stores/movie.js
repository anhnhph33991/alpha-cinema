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
  const matrixColume = ref(0);

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

      console.log(movie.value);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const fetchShowTimeBySlug = async (slug) => {
    try {
      showtime.value = await fetchShowTimeBySlugService(slug);
      matrixColume.value = showtime.value.data.showTime.room.matrix_colume;

      console.log(showtime.value);
      console.log("hehe");
      console.log(matrixColume.value);
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
    matrixColume,
    fetchMovies,
    fetchMovie,
    fetchShowTimeBySlug,
    showtime,
    chooseSeat,
  };
});
