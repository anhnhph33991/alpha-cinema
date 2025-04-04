<template>
  <div v-if="movies.length > 0" class="container h-screen">
    <div class="row">
      <div
        class="col-lg-3 col-md-6 col-sm-12 padding-bottom-30 padding-right-30 padding-left-30"
        v-for="movie in movies"
        :key="movie.id"
      >
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-8 col-xs-8">
            <div class="product-item no-padding">
              <div class="pi-img-wrapper">
                <NuxtLink
                  :to="{ name: 'movies-slug', params: { slug: movie.slug } }"
                >
                  <img
                    class="img-responsive border-radius-20 img-movie-response"
                    :alt="movie.name"
                    :src="formattedImage(movie.img_thumbnail)"
                  />
                </NuxtLink>
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
                  <span class="bold opacity-08"> Thể loại:</span>
                  <!-- {{ movie.category }} -->
                  {{
                    movie.movie_genres
                      ? movie.movie_genres.map((item) => item).join(", ")
                      : "Chưa đặt"
                  }}
                </li>
                <li>
                  <span class="bold opacity-08"> Thời lượng:</span>
                  {{ movie.duration }} phút
                </li>
              </ul>
            </div>

            <div
              class="text-center padding-bottom-30"
              style="min-height: 85px"
              v-if="btnBuy"
            >
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
              <!-- <template v-if="Object.keys(showtimes).length">
                <a-tab-pane
                  v-for="(items, date) in showtimes"
                  :key="date"
                  :tab="formatDate(date)"
                >
                  <div class="tab-content">
                    <div class="d-flex gap-1 al-tab-list flex-wrap">
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
              </template> -->

              <template v-if="Object.keys(movieStore.groupedShowtimes).length">
                <a-tab-pane
                  v-for="(rooms, date) in movieStore.groupedShowtimes"
                  :key="date"
                  :tab="formatDate(date)"
                >
                  <div class="tab-content">
                    <!-- <div class="d-flex gap-1 al-tab-list flex-wrap">
                      <button
                        v-for="(showtime, roomName) in rooms"
                        :key="roomName"
                        @click="navigateShowTime(showtime)"
                        class="btn btn-primary"
                      >
                        {{ formatTime(showtime.start_time) }}
                      </button>
                    </div> -->
                    <div
                      v-for="(items, roomName) in rooms"
                      :key="roomName"
                      class="mb-3"
                    >
                      <h6 class="room-title">{{ roomName }}</h6>
                      <div class="d-flex gap-1 al-tab-list flex-wrap">
                        <a-button
                          type="primary"
                          v-for="(showtime, index) in items"
                          :key="index"
                          @click="navigateShowTime(showtime)"
                        >
                          {{ formatTime(showtime.start_time) }}
                        </a-button>

                        <!-- <button
                          v-for="(showtime, index) in items"
                          :key="index"
                          @click="navigateShowTime(showtime)"
                          class="btn btn-primary"
                        >
                          {{ formatTime(showtime.start_time) }}
                        </button> -->
                      </div>
                    </div>
                  </div>
                </a-tab-pane>
              </template>

              <template v-else>
                <p>Không có data...</p>
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
    <a-empty description="Không có dữ liệu" />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useMovieStore } from "~/stores/movie";

const config = useRuntimeConfig();
const movieStore = useMovieStore();
const movieSelected = ref(null);
const open = ref(false);
const mode = ref("top");
const activeKey = ref(null); // Để null để cập nhật sau
const showtimes = computed(() => movieStore.movie?.data?.showtimes || {});

const selectCinemaBranch = useCookie("selectCinemaBranch");

/**
 * Data active tab
 */
const tabActive = ref(1);

defineProps({
  movies: {
    type: Array,
    required: true,
  },
  btnBuy: {
    type: Boolean,
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
    await movieStore.fetchMovie(
      movieSelected.value.slug,
      selectCinemaBranch.value?.branch_id,
      selectCinemaBranch.value?.cinema_id
    );
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
  // console.log(showtime);
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

const formattedImage = (image) => {
  return image ? `${config.public.BackEndUrl}/storage/${image}` : "";
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
  background-color: lightgray;
  --bs-btn-border-color: none;
}

.opacity-08 {
  opacity: 0.8;
}
</style>
