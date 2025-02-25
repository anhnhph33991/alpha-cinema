<template>
  <section class="movie-section padding-top bg-two" v-if="movies">
    <div class="container">
      <div class="row flex-wrap-reverse justify-content-center">
        <div class="col-lg-12">
          <div class="article-section padding-bottom">
            <slot name="header" />
            <div class="row mb-30-none">
              <div
                class="col-sm-6 col-lg-4"
                v-for="(item, index) in movies"
                :key="index"
              >
                <div class="movie-grid">
                  <div class="movie-thumb c-thumb">
                    <NuxtLink
                      :to="{
                        name: 'movies-slug',
                        params: { slug: item.slug },
                      }"
                    >
                      <img
                        src="https://files.betacorp.vn/media%2fimages%2f2025%2f02%2f06%2fngt%2Dpayoff%2Dposter%2D400x633%2D154653%2D060225%2D20.jpg"
                        alt="movie"
                      />
                    </NuxtLink>
                  </div>
                  <div class="movie-content">
                    <h5 class="title m-0">
                      <NuxtLink
                        :to="{
                          name: 'movies-slug',
                          params: { slug: item.slug },
                        }"
                      >
                        {{ item.name }}
                      </NuxtLink>
                    </h5>

                    <ul class="movie-rating-percent">
                      <li>
                        <i class="fal fa-shopping-cart"></i>
                        <span class="content">88.8k</span>
                      </li>
                      <li>
                        <a-button type="primary" @click="showModal(item)">
                          Open Modal
                        </a-button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template v-if="movieStore.movie.data">
      <a-modal
        :open="open"
        width="1000px"
        centered
        :title="movieStore.movie.data.movie.name"
        @cancel="handleCancel"
        :footer="null"
      >
        <div>
          <div>
            <a-tabs
              v-model="activeKey"
              :tab-position="mode"
              :style="{ height: 'auto' }"
              @tabScroll="callback"
            >
              <template v-if="Object.keys(showtimes).length">
                <a-tab-pane
                  v-for="(items, date) in showtimes"
                  :key="date"
                  :tab="formatDate(date)"
                >
                  <div class="tab-content">
                    <div class="d-flex gap-1 al-tab-list">
                      <a-button
                        type="primary"
                        v-for="(showtime, index) in items"
                        :key="index"
                        @click="navigateShowTime(showtime)"
                      >
                        {{ formatTime(showtime.start_time) }}
                      </a-button>
                    </div>
                  </div>
                </a-tab-pane>
              </template>
              <template v-else>
                <p>Loading showtimes...</p>
              </template>
            </a-tabs>
          </div>
        </div>
      </a-modal>
    </template>
  </section>

  <div v-else>
    <a-spin />
  </div>
</template>

<!-- <script setup>
import { useMovieStore } from "~/stores/movie";

const movieStore = useMovieStore();

const movieSelected = ref(null);

defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

const open = ref(false);

const mode = ref("top");
const activeKey = ref(1);

const showModal = (item) => {
  open.value = true;

  // console.log(item);

  movieSelected.value = item;
};
const handleOk = (e) => {
  console.log(e);
  open.value = false;
};

const handleCancel = (e) => {
  console.log(e);
  open.value = false;
};

const callback = (val) => {
  console.log(val);
};

const showtimes = computed(() => movieStore.movie.data.showtimes || {});

/**
 * Lắng nghe movieSelect thay đổi
 */

watchEffect(async () => {
  if (movieSelected.value) {
    console.log("hehe");
    await movieStore.fetchMovie(movieSelected.value.slug);
  }
});

watchEffect(() => {
  const dates = Object.keys(showtimes.value);
  if (dates.length > 0) {
    activeKey.value = dates[0]; // Lấy ngày đầu tiên làm tab mặc định
  }
});
</script> -->

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useMovieStore } from "~/stores/movie";

const movieStore = useMovieStore();
const movieSelected = ref(null);
const open = ref(false);
const mode = ref("top");
const activeKey = ref(null); // Để null để cập nhật sau
const showtimes = computed(() => movieStore.movie?.data?.showtimes || {});

/**
 * Data active tab
 */
const tabActive = ref(1);

defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

// Hàm mở modal và chọn phim
const showModal = (item) => {
  open.value = true;
  movieSelected.value = item;
};

// Đóng modal
const handleOk = () => {
  open.value = false;
};
const handleCancel = () => {
  open.value = false;
};

// Lắng nghe movieSelected thay đổi để fetch movie details
watchEffect(async () => {
  if (movieSelected.value) {
    await movieStore.fetchMovie(movieSelected.value.slug);
  }
});

// Cập nhật activeKey khi showtimes có dữ liệu
watchEffect(() => {
  const dates = Object.keys(showtimes.value);
  if (dates.length > 0) {
    activeKey.value = dates[0]; // Lấy ngày đầu tiên làm tab mặc định
  }
});

const callback = (val) => {
  console.log("Tab scrolled:", val);
};

const navigateShowTime = (showtime) => {
  console.log(showtime);
  navigateTo({ name: "showtimes-slug", params: { slug: showtime.slug } });
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { weekday: "short", day: "2-digit", month: "2-digit" };

  // Format dạng: "Chủ Nhật, 16/02"
  const formatted = new Intl.DateTimeFormat("vi-VN", options).format(date);

  // Tách thứ và ngày
  const [weekday, dayMonth] = formatted.split(", ");

  // Chuyển thứ thành CN, T2, T3...
  const shortWeekday = weekday
    .replace("Thứ Hai", "T2")
    .replace("Thứ Ba", "T3")
    .replace("Thứ Tư", "T4")
    .replace("Thứ Năm", "T5")
    .replace("Thứ Sáu", "T6")
    .replace("Thứ Bảy", "T7")
    .replace("Chủ Nhật", "CN");

  return `${dayMonth} - ${shortWeekday}`;
};

const formatTime = (time) => {
  return time.slice(0, 5);
};
</script>

<style>
.tab-content {
  padding: 15px 0px;
}
</style>
