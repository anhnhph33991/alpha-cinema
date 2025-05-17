<template>
  <div class="movie-index-section">
    <div>
      <div class="container">
        <ClientOnly>
          <a-tabs v-model="tabActive" :default-active-key="'2'">
            <a-tab-pane key="1" tab="Phim Sắp Chiếu">
              <MovieList :movies="movieStore.moviesComingSoon?.data || []" :btnBuy="false" />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Phim Đang Chiếu">
              <MovieList :movies="movieStore.moviesNowShowing?.data || []" :btnBuy="true" />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Suất Chiếu Đặc Biệt">
              <MovieTabSpecial :movies="movieStore.moviesSpecial?.data || []" :btnBuy="true" />
            </a-tab-pane>
          </a-tabs>
        </ClientOnly>
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
      fetchAllMovies(newData.branch_id, newData.cinema_id);
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
 * Lấy danh sách phim theo branch_id và cinema_id
 *
 * @param branchId - id của chi nhánh
 * @param cinemaId - id của rạp chiếu
 */
function fetchAllMovies(branchId = null, cinemaId = null) {
  return Promise.all([
    movieStore.fetchMoviesComingSoon(branchId, cinemaId),
    movieStore.fetchMoviesNowShowing(branchId, cinemaId),
    movieStore.fetchMoviesSpecial(branchId, cinemaId),
  ]);
}

onMounted(async () => {
  fetchAllMovies(
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
