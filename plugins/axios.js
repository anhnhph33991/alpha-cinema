import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: "https://cinema-dd.me/api/v1",
  });

  instance.interceptors.request.use((config) => {
    if (process.client) {
      const token = localStorage.getItem("authToken");
      if (token) {
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
