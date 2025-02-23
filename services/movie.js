export const fetchMoviesService = async () => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.get("/v1/listMovies");

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
