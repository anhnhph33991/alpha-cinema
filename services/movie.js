export const fetchMoviesService = async (branchId = "", cinemId = "") => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get("/v1/listMovies", {
      params: { branchId: `${branchId}`, cinemId: `${cinemId}` },
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieService = async (slug, branchId = "", cinemId = "") => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get(`/v1/${slug}/movieShowTimes`, {
      params: { branchId: `${branchId}`, cinemId: `${cinemId}` },
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Lấy danh sách phim sắp chiếu (Chưa có xuất chiếu)
 */
export const fetchMoviesComingSoonService = async (
  branchId = "",
  cinemId = ""
) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get("/v1/movies-coming-soon", {
      params: { branchId: `${branchId}`, cinemId: `${cinemId}` },
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Lấy danh sách phim đang chiếu (Có cả xuất chiếu đặc biệt)
 */
export const fetchMoviesNowShowingService = async (
  branchId = "",
  cinemId = ""
) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get("/v1/movies-now-showing", {
      params: { branchId: `${branchId}`, cinemId: `${cinemId}` },
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
/**
 * Lấy danh sách phim đặc biệt
 */
export const fetchMoviesSpecialService = async (
  branchId = "",
  cinemId = ""
) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get("/v1/movies-special", {
      params: { branchId: `${branchId}`, cinemId: `${cinemId}` },
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

// lấy show time bằng slug

export const fetchShowTimeBySlugService = async (
  slug,
  branchId = "",
  cinemId = ""
) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get(`/v1/${slug}/showtimeDetail`, {
      params: { branchId: `${branchId}`, cinemId: `${cinemId}` },
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

/** Chi tiết phim có xuất chiếu đặc biệt */
export const fetchmovieSpecialService = async (
  slug,
  branchId = "",
  cinemId = ""
) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get(`/v1/${slug}/moviesSpecialShowtimes`, {
      params: { branchId: `${branchId}`, cinemId: `${cinemId}` },
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const chooseSeatService = async (
  id,
  seatId,
  userId,
  status,
  holdExpiresAt
) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.post(`/v1/${id}/changeSeatStatus`, {
      seat_id: seatId,
      user_id: userId,
      status: status,
      hold_expires_at: holdExpiresAt,
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const resetAndBuySeatService = async (id, seatId, userId, status) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.post(`/v1/${id}/resetSuccessSeat`, {
      user_id: userId,
      status: status,
      seat_id: seatId,
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
