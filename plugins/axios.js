import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  const config = useRuntimeConfig();
  const token = useCookie("token");

  const instance = axios.create({
    baseURL: config.public.apiUrl,
  });

  instance.interceptors.request.use((config) => {
    if (process.client) {
      if (token.value) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => response.data || response,
    (error) => Promise.reject(error.response?.data || error)
  );

  NuxtApp.provide("axios", instance);
});
