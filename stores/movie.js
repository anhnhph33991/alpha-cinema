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

  const fetchMovies = async (branchId = "", cinemId = "") => {
    try {
      movies.value = await fetchMoviesService(branchId, cinemId);
      console.log(movies.value);
    } catch (error) {
      toast.error("call api lỗi");
    }
  };

  // const fetchMovies = async (branchId = "", cinemaId = "") => {
  //   const cacheKey = generateCacheKey(branchId, cinemaId);
  //   const cacheData = localStorage.getItem(cacheKey);

  //   if (cacheData) {
  //     const parsed = JSON.parse(cacheData);

  //     if (isCacheValid(parsed.timestamp)) {
  //       movies.value = parsed.data;
  //       console.log("📦 Dữ liệu phim lấy từ cache:", parsed.data);
  //       return;
  //     } else {
  //       console.log("⏰ Cache hết hạn, gọi lại API...");
  //     }
  //   }

  //   try {
  //     const data = await fetchMoviesService(branchId, cinemaId);
  //     movies.value = data;

  //     localStorage.setItem(
  //       cacheKey,
  //       JSON.stringify({ timestamp: Date.now(), data })
  //     );

  //     // movies.value = await fetchMoviesService(branchId, cinemaId);
  //     console.log(movies.value);
  //   } catch (error) {
  //     console.error("❌ Lỗi khi gọi API fetchMoviesService:", error);
  //     toast.error("call api lỗi");
  //   }
  // };

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

  const fetchShowTimeBySlug = async (slug, branchId = "", cinemId = "") => {
    try {
      showtime.value = await fetchShowTimeBySlugService(
        slug,
        branchId,
        cinemId
      );
      matrixColume.value = showtime.value.data.showTime.room.matrix_colume;

      console.log("ghế");
      console.log(showtime.value);
      console.log("matrixColume");
      console.log(matrixColume.value);

      // console.log(showtime.value);
      // console.log("hehe");
      // console.log(matrixColume.value);

      // console.log("showtime");
      // console.log(showtime.value);
      // console.log("matrixColume");
      // console.log(matrixColume.value);

      // console.log(showtime.value);

      filterSeatsByUserId(showtime.value.data.seatMapRegular, currentUserId);
    } catch (error) {
      if (error?.error && error.error.code == 404) {
        navigateTo("/");
        console.log(error);
      }

      // toast.error("call api lỗi");
    }
  };

  const chooseSeat = async (id, seatId, userId, status) => {
    try {
      applyRealTimeSeatChange(seatId, status, userId);

      const response = await chooseSeatService(id, seatId, userId, status);

      // console.log(response);

      filterSeatsByUserId(response.data, currentUserId);

      // console.log("đoàn chim to");
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
    groupedShowtimes,
    checkSeatClass,
    mappingSeatTwo,
    mappingSeatDouble,
    mappingSeatNormal,
  };
});
