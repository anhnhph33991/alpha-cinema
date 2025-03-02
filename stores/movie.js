import { toast } from "vue-sonner";
import {
  chooseSeatService,
  fetchMovieService,
  fetchMoviesService,
  fetchShowTimeBySlugService,
  resetAndBuySeatService,
} from "~/services/movie";

import { useAuthStore } from "#imports";

export const useMovieStore = defineStore("movie", () => {
  const movies = ref([]);
  const movie = ref({});
  const showtime = ref([]);
  const matrixColume = ref(0);
  //
  const currentUserId = useAuthStore().user.id || null;
  const seatSelected = ref([]);

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
      // console.log("hehe");
      // console.log(matrixColume.value);

      filterSeatsByUserId(showtime.value.data.seatMapRegular, currentUserId);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const chooseSeat = async (id, seatId, userId, status) => {
    try {
      const response = await chooseSeatService(id, seatId, userId, status);

      console.log(response);
      console.log(`user_id: ${currentUserId}`);

      filterSeatsByUserId(response.data, currentUserId);
    } catch (error) {
      toast.error(error.error);
      console.log(error);
    }
  };

  const filterSeatsByUserId = (seats, userId) => {
    seatSelected.value = seats.filter(
      (seat) => seat.user_id == userId && seat.status == "hold"
    );

    console.log(seatSelected.value);
  };

  const resetAndBuySeat = async (id, seatId, userId, status) => {
    try {
      const response = await resetAndBuySeatService(id, seatId, userId, status);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    movies,
    movie,
    matrixColume,
    seatSelected,
    currentUserId,
    fetchMovies,
    fetchMovie,
    fetchShowTimeBySlug,
    showtime,
    chooseSeat,
    resetAndBuySeat,
  };
});
