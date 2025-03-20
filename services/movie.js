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

export const fetchMovieService = async (slug) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get(`/v1/${slug}/movieShowTimes`);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

// lấy show time bằng slug

export const fetchShowTimeBySlugService = async (slug) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get(`/v1/${slug}/showtimeDetail`);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const chooseSeatService = async (id, seatId, userId, status) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.post(`/v1/${id}/changeSeatStatus`, {
      seat_id: seatId,
      user_id: userId,
      status: status,
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
