<template>
  <div>
    <!-- ==========Banner-Section========== -->
    <LayoutBanner />

    <div class="mt-5 home-section">
      <div class="container" v-if="movieStore.movies.data">
        <a-tabs v-model="tabActive" :default-active-key="'2'">
          <a-tab-pane key="1" tab="Phim Sắp Chiếu">
            <MovieList :movies="[]" />
          </a-tab-pane>
          <a-tab-pane key="2" tab="Phim Đang Chiếu">
            <MovieList :movies="movieStore.movies?.data || []" />
          </a-tab-pane>
          <a-tab-pane key="3" tab="Suất Chiếu Đặc Biệt">
            <MovieList :movies="[]" />
          </a-tab-pane>
        </a-tabs>
      </div>

      <div class="container" v-else>
        <div
          class="d-flex justify-content-center align-content-center align-items-center"
        >
          <a-spin />
        </div>
      </div>
    </div>
    <!-- ==========Movie-Section========== -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "admin",
});

import { LayoutBanner, MovieList } from "#components";
import { useMovieStore } from "~/stores/movie";

const movieStore = useMovieStore();
const tabActive = ref("2");
const adminToken = useCookie("admin_token");

console.log(adminToken.value);

onMounted(async () => {
  movieStore.fetchMovies();
  // console.log("Auth Google:", authGoogle.value);
});
</script>

<style>
.home-section .ant-tabs-nav-wrap {
  display: flex;
  justify-content: center;
}

.home-section .ant-tabs-tab-btn {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
