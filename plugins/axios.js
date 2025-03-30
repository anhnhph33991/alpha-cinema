import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  const config = useRuntimeConfig();
  const auth = useCookie("auth", { watch: true });

  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  const instance = axios.create({
    baseURL: config.public.apiUrl,
    // withCredentials: true,
    // withXSRFToken: true,

    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((config) => {
    const token = auth.value?.token ?? null;
    // if (process.client) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response.data || response,
    (error) => Promise.reject(error.response?.data || error)
  );

  NuxtApp.provide("axios", instance);
});
