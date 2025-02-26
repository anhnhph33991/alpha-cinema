<template>
  <!-- <section class="movie-section padding-top bg-two" v-if="movies.length > 0">
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
  </section> -->

  <div v-if="movies.length > 0">
    <div class="row">
      <div
        class="col-lg-3 col-md-3 col-sm-8 padding-right-30 padding-left-30 padding-bottom-30"
        v-for="movie in movies"
        :key="movie.id"
      >
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-8 col-xs-8">
            <div class="product-item no-padding">
              <div class="pi-img-wrapper">
                <img
                  class="img-responsive border-radius-20"
                  alt=""
                  src="https://files.betacorp.vn/media%2fimages%2f2025%2f02%2f18%2fscreenshot%2D2025%2D02%2D18%2D152722%2D152809%2D180225%2D53.png"
                />
                <span style="position: absolute; top: 10px; left: 10px">
                  <img
                    src="https://www.betacinemas.vn/Assets/Common/icons/films/c-18.png"
                    class="img-responsive"
                  />
                </span>
                <div class="border-radius-20">
                  <a href="#" class="fancybox-fast-view">
                    <i class="fa fa-play-circle"></i>
                  </a>
                </div>
              </div>
              <div class="sticker sticker-new"></div>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-8 col-xs-8">
            <div class="film-info film-xs-info">
              <h3
                class="text-sm-left text-xs-left bold margin-top-5 font-sm-18 font-xs-14"
                style="max-height: 30px; min-height: 30px"
              >
                <NuxtLink
                  :to="{ name: 'movies-slug', params: { slug: movie.slug } }"
                >
                  {{ limitText(movie.name, 20) }}
                </NuxtLink>
              </h3>
              <ul
                class="list-unstyled font-lg font-family-san font-sm-15 font-xs-14"
              >
                <li style="max-height: 50px">
                  <span class="bold"> Thể loại:</span> {{ movie.category }}
                </li>
                <li>
                  <span class="bold"> Thời lượng:</span>
                  {{ movie.duration }} phút
                </li>
              </ul>
            </div>

            <div class="text-center padding-bottom-30" style="min-height: 85px">
              <a
                style="display: block"
                class="btn btn-2 btn-mua-ve2 fancybox-fast-view"
                @click.prevent="showModal(movie)"
              >
                MUA VÉ
              </a>
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
                      <button
                        v-for="(showtime, index) in items"
                        :key="index"
                        @click="navigateShowTime(showtime)"
                        class="btn btn-primary"
                      >
                        {{ formatTime(showtime.start_time) }}
                      </button>
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
  </div>

  <div
    class="mt-5 h-screen d-flex justify-content-center align-items-center"
    v-else
  >
    <a-empty />
  </div>
</template>

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
const showModal = (movie) => {
  open.value = true;
  movieSelected.value = movie;
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

const limitText = (text, limit) => {
  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }

  return text;
};
</script>

<style>
.tab-content {
  padding: 15px 0px;
}

.h-screen {
  min-height: 100vh;
}

.tab-content .btn {
  padding: 5px 25px;
  --bs-btn-border-radius: 0px;
  color: black;
  background-color: #cccccc;
  --bs-btn-border-color: none;
}
</style>
