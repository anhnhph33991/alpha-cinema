<template>
  <div class="movie-index-section">
    <div>
      <div class="container" v-if="movieStore.movies.data">
        <ClientOnly>
          <a-tabs v-model="tabActive" :default-active-key="'2'">
            <a-tab-pane key="1" tab="Phim Sắp Chiếu">
              <!-- <MovieList :movies="[]" /> -->
              <MovieList :movies="movieIsUpcoming" :btnBuy="false" />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Phim Đang Chiếu">
              <!-- <MovieList :movies="movieStore.movies?.data || []" /> -->
              <MovieList :movies="movieIsShowing || []" :btnBuy="true" />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Suất Chiếu Đặc Biệt">
              <MovieList :movies="movieIsSpecial" :btnBuy="true" />
              <!-- <MovieList :movies="[]" /> -->
            </a-tab-pane>
          </a-tabs>
        </ClientOnly>
      </div>

      <div class="container" v-else>
        <div
          class="h-screen d-flex justify-content-center align-content-center align-items-center"
        >
          <a-spin />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MovieList } from "#components";
import { useMovieStore } from "~/stores/movie";

const movieStore = useMovieStore();
const tabActive = ref("2");
const selectCinemaBranch = useCookie("selectCinemaBranch");

watch(
  selectCinemaBranch,
  async (newData, oldData) => {
    if (newData) {
      console.log("new data");
      await movieStore.fetchMovies(newData.branch_id, newData.cinema_id);
    }
  },
  { deep: true }
);
/**
 *  Biến format thời gian việt nam
 */
const nowVN = new Date(
  new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date())
);
/**
 * phim sắp chiếu
 */
const movieIsUpcoming = computed(() => {
  return (
    movieStore.movies?.data?.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      const createdAt = new Date(movie.created_at);
      // return releaseDate > nowVN && createdAt < nowVN;
      return releaseDate > nowVN && createdAt <= nowVN && movie.is_special != 1;
    }) || []
  );
});

/**
 * Phim đang chiếu
 */
const movieIsShowing = computed(() => {
  return (
    movieStore.movies?.data?.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      const endDate = new Date(movie.end_date);

      return releaseDate <= nowVN && nowVN <= endDate;
      // return nowVN <= endDate;
    }) || []
  );
});

/**
 * Xuất chiếu đặc biệt
 */
const movieIsSpecial = computed(() => {
  return (
    movieStore.movies?.data?.filter((movie) => {
      const createdAt = new Date(movie.created_at);
      const releaseDate = new Date(movie.release_date);

      // Nếu check xuất chiếu theo cách ban đầu
      // return createdAt <= nowVN && nowVN <= releaseDate;

      // Nếu check xuất chiếu đặc biệt bằng is_special
      // return movie.is_special == 1;

      // trường hợp thứ 3
      return (
        nowVN < releaseDate &&
        createdAt <= nowVN &&
        createdAt < releaseDate &&
        movie.is_special == 1
      );
    }) || []
  );
});
onMounted(async () => {
  movieStore.fetchMovies(
    selectCinemaBranch.value?.branch_id,
    selectCinemaBranch.value?.cinema_id
  );
});
</script>

<style>
.movie-index-section .ant-tabs-nav-wrap {
  display: flex;
  justify-content: center;
}

.movie-index-section .ant-tabs-tab-btn {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
