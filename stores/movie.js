import { toast } from "vue-sonner";
import {
  chooseSeatService,
  fetchMoviesComingSoonService,
  fetchMovieService,
  fetchMoviesNowShowingService,
  fetchmovieSpecialService,
  fetchMoviesService,
  fetchMoviesSpecialService,
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

  ////////////
  /**
   * Phim sắp chiếu
   */
  const moviesComingSoon = ref([]);
  /**
   * Phim đang chiếu bao gồm cả xuất chiếu đặc biệt
   */
  const moviesNowShowing = ref([]);
  /**
   * Xuất chiếu đặc biệt
   */
  const moviesSpecial = ref([]);

  /**
   * Chi tiết phim có xuất chiếu đặc biệt
   */
  const movieSpecial = ref({});

  const fetchMovies = async (branchId = "", cinemId = "") => {
    try {
      movies.value = await fetchMoviesService(branchId, cinemId);
      console.log(movies.value);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  /**
   * Lấy danh sách phim sắp chiếu(Chưa có xuất chiếu)
   */
  const fetchMoviesComingSoon = async (branchId = "", cinemId = "") => {
    try {
      moviesComingSoon.value = await fetchMoviesComingSoonService(
        branchId,
        cinemId
      );

      console.log("Phim sắp chiếu");
      console.log(moviesComingSoon.value);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy danh sách phim đang chiếu (có cả xuất chiếu đặc biệt)
   */
  const fetchMoviesNowShowing = async (branchId = "", cinemId = "") => {
    try {
      moviesNowShowing.value = await fetchMoviesNowShowingService(
        branchId,
        cinemId
      );

      console.log("Phim đang chiếu");
      console.log(moviesNowShowing.value);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Lấy danh sách phim có xuất chiếu đặc biệt
   */
  const fetchMoviesSpecial = async (branchId = "", cinemId = "") => {
    try {
      moviesSpecial.value = await fetchMoviesSpecialService(branchId, cinemId);

      console.log("Phim có xuất chiếu đặc biệt");
      console.log(moviesSpecial.value);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovie = async (slug, branchId = "", cinemaId = "") => {
    try {
      movie.value = await fetchMovieService(slug, branchId, cinemaId);

      console.log(movie.value);
      console.log("showtime convert");
      console.log(groupedShowtimes.value);
    } catch (error) {
      // console.log(error);
      if (error?.code && error.code == 404) {
        navigateTo("/");
        console.log(error);
      }
    }
  };

  const groupedShowtimes = computed(() => {
    if (!movie.value || !movie.value.data || !movie.value.data.showtimes) {
      return {}; // Trả về object rỗng nếu dữ liệu chưa sẵn sàng
    }

    const grouped = {};
    Object.entries(movie.value.data.showtimes).forEach(
      ([date, showtimeList]) => {
        grouped[date] = showtimeList.reduce((acc, showtime) => {
          if (!acc[showtime.name_room]) {
            acc[showtime.name_room] = [];
          }
          acc[showtime.name_room].push(showtime);
          return acc;
        }, {});
      }
    );
    return grouped;
  });

  const groupedShowtimesSpecial = computed(() => {
    if (
      !movieSpecial.value ||
      !movieSpecial.value.data ||
      !movieSpecial.value.data.showtimes
    ) {
      return {}; // Trả về object rỗng nếu dữ liệu chưa sẵn sàng
    }

    const grouped = {};
    Object.entries(movieSpecial.value.data.showtimes).forEach(
      ([date, showtimeList]) => {
        grouped[date] = showtimeList.reduce((acc, showtime) => {
          if (!acc[showtime.name_room]) {
            acc[showtime.name_room] = [];
          }
          acc[showtime.name_room].push(showtime);
          return acc;
        }, {});
      }
    );
    return grouped;
  });

  /**
   * lấy chi tiết phim có xuất chiếu đặc biệt
   */
  const fetchmovieSpecial = async (slug, branchId = "", cinemaId = "") => {
    try {
      movieSpecial.value = await fetchmovieSpecialService(
        slug,
        branchId,
        cinemaId
      );

      console.log("chọn showtime mới");

      console.log(movieSpecial.value);
    } catch (error) {
      // console.log(error);
      if (error?.code && error.code == 404) {
        navigateTo("/");
        console.log(error);
      }
    }
  };

  const fetchShowTimeBySlug = async (slug, branchId = "", cinemId = "") => {
    try {
      showtime.value = await fetchShowTimeBySlugService(
        slug,
        branchId,
        cinemId
      );
      matrixColume.value = showtime.value.data.showTime.room.matrix_colume;

      filterSeatsByUserId(showtime.value.data.seatMapRegular, currentUserId);
    } catch (error) {
      if (error?.error && error.error.code == 404) {
        navigateTo("/");
        console.log(error);
      }
    }
  };

  const chooseSeat = async (id, seatId, userId, status, holdExpiresAt) => {
    try {
      applyRealTimeSeatChange(seatId, status, userId);

      const response = await chooseSeatService(
        id,
        seatId,
        userId,
        status,
        holdExpiresAt
      );

      filterSeatsByUserId(response.data, currentUserId);
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

          // Xử lý lại danh sách ghế đang chọn (seatSelected)
          if (seatSelected.value) {
            const index = seatSelected.value.findIndex((s) => s.id === seat.id);
            const isValid =
              seat.status === "hold" && seat.user_id === currentUserId;

            if (index > -1 && !isValid) {
              // Ghế này không còn là ghế "hold" của current user => xóa khỏi danh sách
              seatSelected.value.splice(index, 1);
            }
          }

          // Cập nhật lại style, v.v.
          getSeatClass(seat);
          isSeatSelected(seat);
          isSeatHeldByOthers(seat);
          return;
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

  function checkSeatClass(seat) {
    let baseClass = "seat-test seat-cell"; // Các class cơ bản luôn có

    if (seat.status === "available") {
      return `${baseClass} seat-used`;
    }

    if (seat.status === "sold") {
      return `${baseClass} seat-sold`;
    }

    if (seat.status === "hold" && seat.user_id === currentUserId) {
      return `${baseClass} seat-select`;
    }

    // Trường hợp mặc định nếu không khớp điều kiện nào
    return `${baseClass} seat-used`;
  }

  const mappingSeatTwo = (seat) => {
    if (seat.status == "hold") {
      if (seat.user_id == currentUserId) {
        return "seat-select";
      }

      return "seat-hold";
    }

    if (seat.status == "sold") {
      return "seat-sold";
    }

    return "";
  };

  const mappingSeatDouble = (seat) => {
    if (seat.status == "hold") {
      if (seat.user_id == currentUserId) {
        return "seat-select";
      }

      return "seat-hold";
    }

    if (seat.status == "sold") {
      return "seat-sold";
    }

    return "";
  };

  const mappingSeatNormal = (seat) => {
    if (seat.status == "hold") {
      if (seat.user_id == currentUserId) {
        return "seat-select";
      }

      return "seat-hold";
    }

    if (seat.status == "sold") {
      return "seat-sold";
    }

    return "";
  };
  /**
   * Mapping key cache localstorage
   */
  const generateCacheKey = (branchId, cinemaId) => {
    return `movies_${branchId || "all"}_${cinemaId || "all"}`;
  };

  const isCacheValid = (timestamp) => {
    const now = Date.now();
    const TEN_MINUTES = 10 * 60 * 1000;
    return now - timestamp < TEN_MINUTES;
  };

  /**
   * Định dạng thời gian để gửi hold_expires_at
   */
  const getCurrentTimeHHMM = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  /**
   * Hàm thời gian + 10p tránh ảnh hưởng function gốc
   */
  const getTimePlusMinutes = (minutes) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutes);
    const hours = now.getHours().toString().padStart(2, "0");
    const mins = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${mins}`;
  };

  return {
    moviesComingSoon,
    moviesNowShowing,
    moviesSpecial,
    movies,
    movie,
    movieSpecial,
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
    groupedShowtimes,
    groupedShowtimesSpecial,
    checkSeatClass,
    mappingSeatTwo,
    mappingSeatDouble,
    mappingSeatNormal,
    getCurrentTimeHHMM,
    getTimePlusMinutes,
    fetchMoviesComingSoon,
    fetchMoviesNowShowing,
    fetchMoviesSpecial,
    fetchmovieSpecial,
  };
});
