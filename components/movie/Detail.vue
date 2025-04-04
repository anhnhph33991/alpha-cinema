<template>
  <div class="movie-detail-section">
    <div class="w-100 custom-wrapper position-relative wrapper">
      <div class="w-100 h-100 inset-0 position-absolute">
        <img
          alt="CAPTAIN AMERICA: THẾ GIỚI MỚI-T13- 2D"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          class="object-cover"
          sizes="100vw"
          :src="formattedImage"
          style="
            position: absolute;
            height: 100%;
            width: 100%;
            inset: 0px;
            color: transparent;
          "
        />
      </div>
      <div
        class="w-100 h-100 position-absolute z-10 inset-0 bg-primary/60"
      ></div>
      <div
        class="d-none d-xl-block position-absolute w-100 top-0 bottom-0 start-0 end-0 m-auto z-20"
      >
        <div
          class="w-100 mx-auto d-flex justify-content-center align-items-center custom-container"
        >
          <div
            class="position-relative shadow-lg"
            style="height: 333px; min-width: 238px"
          >
            <img
              alt="CAPTAIN AMERICA: THẾ GIỚI MỚI-T13- 2D"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              class="object-cover rounded-xl"
              sizes="238px"
              :src="formattedImage"
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                inset: 0px;
                color: transparent;
              "
            />
          </div>

          <div class="d-flex flex-column" style="font-size: 0.875rem">
            <div class="d-flex align-items-center mt-2 gap-2">
              <h3 class="fw-bold fs-4 text-white">
                {{ movie.name }}
              </h3>
              <div class="rounded-3 p-2 border border-white fw-bold text-white">
                2D
              </div>
            </div>

            <div class="d-flex align-items-center mt-2 gap-3 small">
              <p class="text-white">
                Danh mục:

                <!-- {{ movie.category }} -->
                {{
                  movie.movie_genres
                    ? movie.movie_genres.map((item) => item).join(", ")
                    : "Chưa đặt"
                }}
              </p>
              <p class="text-white">-</p>
              <!-- <p class="text-white">Mỹ</p> -->
              <p class="text-white">Thời lượng: {{ movie.duration }} phút</p>
              <p class="text-white">-</p>
              <p class="text-white">Đạo diễn: {{ movie.director }}</p>
            </div>

            <!-- <p class="text-white">Khởi chiếu: 14/02/2025</p> -->
            <p class="text-white">Khởi chiếu: {{ formattedReleaseDate }}</p>

            <div class="text-truncate-multi text-white">
              {{ movie.description }}
            </div>

            <div class="text-danger mt-3">
              Kiểm duyệt: T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi
              trở lên (13+)
            </div>

            <div class="mt-2 d-flex align-items-center gap-4 flex-grow-1">
              <!-- <a class="fs-6 text-decoration-underline al-cursor-pointer">
                Chi tiết nội dung
              </a> -->

              <button
                class="border border-warning rounded-pill py-2 px-4 text-warning bg-transparent btn-hover-scale"
                type="button"
                @click="handleShowTrailer"
              >
                Xem trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a-modal
      :open="openTrailer"
      width="1000px"
      :title="movie.name"
      :footer="null"
      centered
      @cancel="openTrailer = false"
    >
      <iframe
        v-if="embedUrl"
        :src="embedUrl"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </a-modal>

    <div class="w-100 h-screen" v-if="!isUpcomingMovie">
      <div class="container">
        <a-tabs
          v-model="activeKey"
          :default-active-key="'1'"
          :style="{ height: '200px' }"
          @tabScroll="callback"
        >
          <a-tab-pane
            v-for="(items, date) in showtime"
            :key="date"
            :tab="formatDate(date)"
          >
            <div class="h-screen">
              <div class="d-flex gap-1 flex-wrap">
                <button
                  v-for="(showtime, index) in items"
                  :key="index"
                  class="btn btn-primary"
                  @click="navigateShowTime(showtime)"
                >
                  {{ formatTime(showtime.start_time) }}
                </button>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div class="w-100 h-screen" v-else></div>
  </div>
</template>

<script setup>
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  movie: {
    required: true,
  },
  showtime: {
    required: true,
  },
});

const activeKey = ref("1");
const config = useRuntimeConfig();

/**
 * Modal Show Trailer
 */

const openTrailer = ref(false);

const handleShowTrailer = () => {
  openTrailer.value = true;
};

const embedUrl = computed(() => {
  if (!props.movie.trailer_url) return "";
  const videoId =
    props.movie.trailer_url.split("v=")[1] ||
    props.movie.trailer_url.split("youtu.be/")[1];
  return videoId
    ? `https://www.youtube.com/embed/${videoId.split("&")[0]}`
    : "";
});

/** 111 */

const callback = (val) => {
  console.log(val);
};

const formatTime = (time) => {
  return time.slice(0, 5);
};

const formattedReleaseDate = computed(() => {
  if (!props.movie.release_date) return "";
  const [year, month, day] = props.movie.release_date.split("-");
  return `${day}/${month}/${year}`;
});

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

const formattedStartTime = (time) => {
  if (!time) return "";
  const [year, month, day] = time.split("-");
  return `${day}/${month}/${year}`;
};

const formattedImage = computed(() => {
  if (!props.movie.img_thumbnail) return "";

  return `${config.public.BackEndUrl}/storage/${props.movie.img_thumbnail}`;
});

const navigateShowTime = (showtime) => {
  navigateTo({ name: "showtimes-slug", params: { slug: showtime.slug } });
};

const isUpcomingMovie = computed(() => {
  // Lấy thời gian hiện tại theo múi giờ Việt Nam
  const nowVN = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
  );

  const releaseDate = new Date(props.movie.release_date);
  const createdAt = new Date(props.movie.created_at);

  return (
    releaseDate > nowVN && createdAt <= nowVN && props.movie.is_special != 1
  );
});

onMounted(() => {
  console.log(props.slug);
  console.log(props.movie);
  console.log(props.showtime);
});
</script>

<style scoped>
.custom-wrapper {
  height: 250px;
}

@media (min-width: 768px) {
  .custom-wrapper {
    height: 300px;
  }
}
@media (min-width: 1280px) {
  .custom-wrapper {
    height: 473px;
  }
}

.wrapper:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: linear-gradient(0deg, #10141b, rgba(16, 20, 27, 0));
}

.custom-container {
  max-width: 56rem;
  height: 473px;
  /* padding-top: 96px;
  padding-bottom: 28px; */
  gap: 40px;
}

.rounded-xl {
  border-radius: 0.75rem;
}

a {
  color: white;
}

.h-250 {
  height: 250px;
}

.inset-0 {
  inset: 0;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.bg-primary\/60 {
  background-color: rgba(16, 20, 27, 0.6);
}

.object-cover {
  object-fit: cover;
}

img,
video {
  max-width: 100%;
  height: auto;
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
}

.text-truncate-multi {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* Giới hạn số dòng */
  line-clamp: 4; /* Thuộc tính tiêu chuẩn */
  overflow: hidden;
}

.btn-hover-scale {
  transition: transform 0.2s ease-in-out;
}

.btn-hover-scale:hover {
  transform: scale(1.05);
}

h3 {
  margin-top: 0;
  margin-bottom: 0;
}

.movie-detail-section .ant-tabs-tab-btn {
  font-size: 1.4rem;
  font-weight: 600;
}

.movie-detail-section .btn {
  padding: 5px 25px;
  --bs-btn-border-radius: 0px;
  color: black;
  background-color: #cccccc;
  --bs-btn-border-color: none;
}
</style>
