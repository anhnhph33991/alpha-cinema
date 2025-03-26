export const loginService = async (data) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post("/v1/signin", data);

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
    const response = await $axios.post(`/v1/signup`, data);

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

export const getRankService = async () => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get(`/v1/getRank`);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const sendOtpService = async (email) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post(`/v1/send-otp`, {
      email: email,
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const verifyOtpService = async (data) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post(`/v1/verify-otp`, {
      email: data.email,
      otp: data.otp,
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordService = async (data) => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.post(`/v1/reset-password`, {
      email: data.email,
      otp: data.otp,
      password: data.password,
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
