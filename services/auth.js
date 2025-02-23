export const loginService = async (data) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post("/v1/login", data);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const registerService = async (data) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post(`/v1/register`, data);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutService = async () => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post(`/v1/logout`);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
