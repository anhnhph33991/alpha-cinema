<template>
  <div>
    <!-- ==========Banner-Section========== -->
    <LayoutBanner />
    <!-- ==========Banner-Section========== -->

    <!-- ==========Ticket-Search========== -->
    <!-- <UiTicketSearch /> -->
    <!-- ==========Ticket-Search========== -->

    <!-- ==========Movie-Section========== -->
    <div class="mt-5">
      <div class="container" v-if="movieStore.movies.data">
        <a-tabs v-model="tabActive" :default-active-key="'2'">
          <a-tab-pane key="1" tab="Phim Sắp Chiếu">
            <MovieList :movies="[]" />
          </a-tab-pane>
          <a-tab-pane key="2" tab="Phim Đang Chiếu">
            <MovieList :movies="movieStore.movies?.data || []" />
          </a-tab-pane>
          <a-tab-pane key="3" tab="Suất Chiếu Đặc Biệt">
            <h1>Data Tab 3</h1>
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
import { LayoutBanner, MovieList } from "#components";
import { useMovieStore } from "~/stores/movie";

const movieStore = useMovieStore();
const tabActive = ref("2");

onMounted(async () => {
  movieStore.fetchMovies();
  await nextTick();
  tabActive.value = "2";
});
</script>

<style>
.ant-tabs-nav-wrap {
  display: flex;
  justify-content: center;
}

.ant-tabs-tab-btn {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
