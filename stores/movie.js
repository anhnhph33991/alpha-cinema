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
      // console.log(movies.value);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const fetchMovie = async (slug) => {
    try {
      movie.value = await fetchMovieService(slug);

      // console.log(movie.value);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const fetchShowTimeBySlug = async (slug) => {
    try {
      showtime.value = await fetchShowTimeBySlugService(slug);
      matrixColume.value = showtime.value.data.showTime.room.matrix_colume;

      // console.log(showtime.value);
      // console.log("hehe");
      // console.log(matrixColume.value);

      // console.log("showtime");
      // console.log(showtime.value);
      // console.log("matrixColume");
      // console.log(matrixColume.value);

      console.log(showtime.value);

      filterSeatsByUserId(showtime.value.data.seatMapRegular, currentUserId);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  const chooseSeat = async (id, seatId, userId, status) => {
    try {
      applyRealTimeSeatChange(seatId, status, userId);

      const response = await chooseSeatService(id, seatId, userId, status);

      // console.log(response);

      filterSeatsByUserId(response.data, currentUserId);

      console.log("đoàn chim to");
    } catch (error) {
      applyRealTimeSeatChange(seatId, "available", null);
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
  /**
   * Cập nhật class ghế dựa vào data realtime trả về
   *
   * @param {number | string} seatId
   * @param {null | string} status
   * @param {number | string} userId
   */
  const applyRealTimeSeatChange = (seatId, status, userId) => {
    if (!showtime.value.data.seatMap) {
      console.warn("⚠️ seatMap chưa được load!");
      return;
    }

    const rows = Object.keys(showtime.value.data.seatMap);

    for (const row of rows) {
      const cols = Object.keys(showtime.value.data.seatMap[row]);
      for (const col of cols) {
        const seat = showtime.value.data.seatMap[row][col];
        if (seat.id === seatId) {
          seat.status = status;
          seat.user_id = userId;

          getSeatClass(seat);
          isSeatSelected(seat);
          isSeatHeldByOthers(seat);
          return; // Thoát ngay khi tìm thấy
        }
      }
    }
  };
  /**
   * Mapping class từ database
   *
   * @param {*} seat
   */
  const getSeatClass = (seat) => {
    return {
      sold: seat.status === "sold",
      available: seat.status === "available",
    };
  };
  /**
   *
   *
   * @param {*} seat
   */
  const isSeatSelected = (seat) => {
    return seat.status === "hold" && seat.user_id == currentUserId;
  };
  /**
   *
   * @param {*} seat
   */
  const isSeatHeldByOthers = (seat) => {
    return seat.status === "hold" && seat.user_id != currentUserId;
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
    applyRealTimeSeatChange,
    getSeatClass,
    isSeatSelected,
    isSeatHeldByOthers,
  };
});
