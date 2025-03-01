<template>
  <div class="movie-section padding-top bg-two" v-if="movieStore.showtime.data">
    <!-- <section
      class="details-banner hero-area seat-plan-banner"
      style="background: url('/theme/img/banner/banner-movie-details.jpg')"
    >
      <div class="container">
        <div class="details-banner-wrapper">
          <div class="details-banner-content style-two">
            <h3 class="title">
              {{ movieStore.showtime.data.showTime.movie.name }}
            </h3>
          </div>
        </div>
      </div>
    </section>
    <div class="seat-plan-section padding-bottom">
      <div class="screen-thumb">
        <img :src="screen" alt="movie" />
      </div>
      <div class="container">
        <div class="screen-area">
          <div class="main-seat-layout">
            <div>
              <div
                class="seat-row"
                v-for="(row, rowName) in movieStore.showtime.data.seatMap"
                :key="rowName"
              >
                <span class="row-label">{{ rowName }}</span>
                <div
                  v-for="seat in row"
                  :key="seat.id"
                  :class="[
                    'seat',
                    getSeatClass(seat),
                    {
                      selected: isSeatSelected(seat),
                      hold: isSeatHeldByOthers(seat),
                      'double-seat': seat.type_seat_id == 3,
                    },
                  ]"
                  @click="handleChooseSeat(seat)"
                >
                  <Sofa v-if="seat.type_seat_id == 3" />
                  <Armchair v-else />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="proceed-book mt-5">
          <div class="proceed-to-book">
            <div class="book-item">
              <span>Your Selected Seat</span>
              <h3 class="title">a1, a2</h3>
            </div>
            <div class="book-item">
              <span>total price</span>
              <h3 class="title">$200</h3>
            </div>
            <div class="book-item">
              <a href="movie-checkout.html" class="custom-button">
                checkout now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="showtime-choose-seat h-1000">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="choose-seat-row" v-if="isChoosingScreen">
              <div>
                <div class="d-flex justify-content-center">
                  <div class="row">
                    <div class="col-lg-12">
                      <img :src="screen" alt="luxchill" />
                    </div>

                    <div class="seat-template mt-5">
                      <div class="screen-area">
                        <div class="main-seat-layout">
                          <div>
                            <div
                              class="seat-row"
                              v-for="(row, rowName) in movieStore.showtime.data
                                .seatMap"
                              :key="rowName"
                            >
                              <span class="row-label">{{ rowName }}</span>
                              <div
                                v-for="seat in row"
                                :key="seat.id"
                                :class="[
                                  'seat',
                                  getSeatClass(seat),
                                  {
                                    selected: isSeatSelected(seat),
                                    hold: isSeatHeldByOthers(seat),
                                    'double-seat': seat.type_seat_id == 3,
                                  },
                                ]"
                                @click="handleChooseSeat(seat)"
                              >
                                <Sofa v-if="seat.type_seat_id == 3" />

                                <Armchair v-else />

                                <!-- <Armchair v-if="seat.type_seat_id == 2" />
                                <RockingChair v-if="seat.type_seat_id == 1" /> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="choose-seat-row payment-form" v-else>
              <div>
                <div>
                  <div class="row">
                    <div
                      class="col-lg-12 payment-page-title"
                      style="height: 35px; line-height: 35px"
                    >
                      <img
                        style="height: 100%; float: left"
                        src="https://betacinemas.vn/Assets/global/img/booking/ic-inforpayment.png"
                      />
                      <div class="page-title" id="scroll-top">
                        THÔNG TIN THANH TOÁN
                      </div>
                    </div>

                    <div
                      class="col-lg-4 col-md-4 payment-user-info"
                      style="margin-top: 25px; margin-bottom: 0px"
                    >
                      <div class="col-md-5 user-info-item font-16">
                        <span class="bold user-info-item-label">Họ Tên: </span
                        ><br />
                        <span class="user-info-item-value">David William </span>
                      </div>
                    </div>

                    <div
                      class="col-lg-4 col-md-4 payment-user-info"
                      style="margin-top: 25px; margin-bottom: 0px"
                    >
                      <div class="col-md-5 user-info-item font-16">
                        <span class="bold user-info-item-label"
                          >Số điện thoại: </span
                        ><br />
                        <span class="user-info-item-value">0367253666</span>
                      </div>
                    </div>

                    <div
                      class="col-lg-4 col-md-4 payment-user-info"
                      style="margin-top: 25px; margin-bottom: 0px"
                    >
                      <div class="col-md-5 user-info-item font-16">
                        <span class="bold user-info-item-label">Email:</span
                        ><br />
                        <span class="user-info-item-value"
                          >admin@gmail.com</span
                        >
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <h1>Hello</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 sidebar" :style="{ top: sidebarTop + 'px' }">
            <div class="bg-white">
              <div class="row">
                <div class="col-lg-6">
                  <div class="pi-img-wrapper">
                    <img
                      class=""
                      style="width: 100%"
                      alt=""
                      v-if="
                        movieStore.showtime.data &&
                        movieStore.showtime.data.showTime.movie.img_thumbnail
                      "
                      :src="
                        formattedImage(
                          movieStore.showtime.data.showTime.movie.img_thumbnail
                        )
                      "
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <h3 class="bold color1">
                    {{ showtime.movie.name }}
                  </h3>
                  <h4>2D Phụ đề</h4>
                </div>

                <div class="col-lg-12">
                  <ul
                    class="list-unstyled padding-left-30 padding-right-30 padding-top-10 padding-bottom-10 font-md font-family-san"
                  >
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6">
                          <Tag :size="18" />
                          Thể loại
                        </div>
                        <div class="col-lg-6">
                          <span class="bold fz-md">
                            {{ showtime.movie.category }}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6">
                          <Clock :size="18" />
                          Thời lượng
                        </div>
                        <div class="col-lg-6">
                          <span class="bold fz-md">
                            {{ showtime.movie.duration }} phút
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-12">
                  <hr
                    class="border-dashed border-top-2"
                    style="margin-top: 5px; margin-bottom: 5px"
                  />

                  <ul
                    class="list-unstyled padding-left-30 padding-right-30 padding-top-10 padding-bottom-10 font-md font-family-san"
                  >
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <Hotel :size="18" />
                          Rạp chiếu
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <span class="bold fz-md">
                            {{ showtime.cinema.name }}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <CalendarDays :size="18" />
                          Ngày chiếu
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <span class="bold fz-md">
                            {{ formattedStartTime(showtime.date) }}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <Clock :size="18" />
                          Giờ chiếu
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <span class="bold fz-md">
                            {{ formatTime(showtime.start_time) }}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <TvMinimal :size="18" />
                          Phòng chiếu
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <span class="bold fz-md">
                            {{ showtime.room.name }}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  class="col-lg-12 sidebar-footer mb-5 text-center gap-2 d-flex justify-content-center"
                >
                  <template v-if="!isChoosingScreen">
                    <button
                      class="btn btn-primary"
                      @click="isChoosingScreen = true"
                      v-if="!isChoosingScreen"
                    >
                      Quay Lại
                    </button>

                    <button class="btn btn-primary" @click="handleNextOrder">
                      Tiếp theo
                    </button>
                  </template>

                  <button
                    class="btn btn-primary"
                    @click="isChoosingScreen = false"
                    v-if="isChoosingScreen"
                  >
                    Tiếp theo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div >

    </div> -->
  </div>

  <div v-else class="h-screen d-flex justify-content-center align-items-center">
    <div>
      <a-spin></a-spin>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

import { useMovieStore } from "~/stores/movie";
import { useAuthStore } from "~/stores/auth";
import {
  Armchair,
  Sofa,
  CalendarDays,
  Clock,
  TvMinimal,
  Hotel,
  Tag,
  RockingChair,
} from "lucide-vue-next";
import { useWindowScroll } from "@vueuse/core";
const { y } = useWindowScroll();

const movieStore = useMovieStore();
const route = useRoute();
const slug = route.params.slug;
const currentUserId = useAuthStore().user.id;

/**
 * Làm chức năng
 */
const isChoosingScreen = ref(true);

const formattedImage = (image) => {
  return image ? `https://alphacinema.me/storage/${image}` : "";
};

const showtime = computed(() => movieStore.showtime.data?.showTime || null);

/**
 *
 */

/**
 * Image Vue
 */
const screen =
  "https://chieuphimquocgia.com.vn/_next/image?url=%2Fimages%2Fscreen.png&w=1920&q=75";
// const seatRegular = "/theme/img/movie/seat-1-booked.png";

// import SeatRegular from "~/assets/seat-icon.svg";
import SeatRegular from "~/assets/seat-regular.svg";
import { toast } from "vue-sonner";
const echo = useEcho();

/**
 * Ngăn chặn spam click ghế
 */
const processingSeats = new Set();
/**
 * Map class ghế
 */
const getSeatClass = (seat) => {
  return {
    sold: seat.status === "sold",
    available: seat.status === "available",
  };
};

/**
 *
 */
const isSeatSelected = (seat) => {
  return seat.status === "hold" && seat.user_id == currentUserId;
};

const isSeatHeldByOthers = (seat) => {
  return seat.status === "hold" && seat.user_id != currentUserId;
};

const handleChooseSeat = async (seat) => {
  // console.log(seat);
  // console.log(currentUserId);

  if (processingSeats.has(seat.id)) {
    toast.warning("Có dấu hiệu spam, vui lòng thử lại 🤬");
    return;
  }

  if (seat.status === "sold") {
    toast.warning("Ghế này đã được bán!");
    return;
  }

  if (seat.status === "hold" && seat.user_id != currentUserId) {
    toast.warning("Ghế này đang được giữ");
    return;
  }

  const newStatus =
    seat.status === "hold" && seat.user_id == currentUserId
      ? "available"
      : "hold";

  console.log(movieStore.showtime.data.showTime.id);

  processingSeats.add(seat.id);

  await movieStore.chooseSeat(
    movieStore.showtime.data.showTime.id,
    seat.id,
    currentUserId,
    newStatus
  );

  processingSeats.delete(seat.id);
};

const callEcho = () => {
  // console.log("🔥 Đang lắng nghe kênh showtime...");
  const channel = echo.channel("showtime");
  // console.log("🟢 Đã vào channel:", channel);

  channel.listen("RealTimeSeatEvent", (data) => {
    // console.log("🔥 Nhận dữ liệu từ Pusher:", data);
    // console.log(data);

    updateSeatStatus(data.seat_id, data.status, data.user_id);
  });
};

const updateSeatStatus = (seatId, newStatus, userId) => {
  console.time("updateSeatStatus (cũ)");

  if (!movieStore.showtime.data.seatMap) {
    console.warn("⚠️ seatMap chưa được load!");
    return;
  }

  Object.keys(movieStore.showtime.data.seatMap).forEach((row) => {
    Object.keys(movieStore.showtime.data.seatMap[row]).forEach((col) => {
      if (movieStore.showtime.data.seatMap[row][col].id === seatId) {
        movieStore.showtime.data.seatMap[row][col].status = newStatus;
        movieStore.showtime.data.seatMap[row][col].user_id = userId;

        // console.log(movieStore.showtime.data.seatMap[row][col]);

        getSeatClass(movieStore.showtime.data.seatMap[row][col]);
        isSeatSelected(movieStore.showtime.data.seatMap[row][col]);
        isSeatHeldByOthers(movieStore.showtime.data.seatMap[row][col]);
      }
    });
  });
  console.timeEnd("updateSeatStatus (cũ)");
};

const handleNextOrder = () => {
  toast.success("Thanh toán đê");
};

const extraHeight = 47;

const sidebarTop = computed(() => {
  return y.value > 3.2
    ? Math.max(y.value + extraHeight, 0)
    : Math.max(y.value, 0);
});

const formatTime = (time) => {
  return time.slice(0, 5);
};

const formattedStartTime = (time) => {
  if (!time) return "";
  const [year, month, day] = time.split("-");
  return `${day}/${month}/${year}`;
};

onMounted(() => {
  movieStore.fetchShowTimeBySlug(slug);
  callEcho();
});

onUnmounted(() => {
  echo.leaveChannel("showtime");
});
</script>

<style scoped>
.seat-row {
  display: flex;
  align-items: center;
}

.row-label {
  width: 20px;
  font-weight: bold;
}

.seat {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  /* cursor: pointer;
  border: 1px solid #ddd; */
}

.selected {
  background-color: #007bff;
  color: white;
}

.sold {
  background-color: red;
  color: black;
}

.hold {
  background-color: #ffc107;
  color: black;
}

.text-white {
  color: black;
}

.main-seat-layout {
  justify-content: center;
  align-content: center;
  align-items: center;
  display: flex;
}

.seat:not(.empty-seat) {
  border: 1px solid #ddd;
  cursor: pointer; /* Chỉ có cursor khi ghế có dữ liệu */
}

.double-seat {
  width: 84px !important;
  height: 40px !important;
}

.sidebar {
  position: relative;
}

.h-1000 {
  min-height: 1200px;
}

.movie-section .bold {
  font-weight: 700 !important;
}

.movie-section .color1 {
  color: #03599d !important;
}

.movie-section h3 {
  font-size: 21px;
}

.movie-section h4 {
  font-size: 17px;
}

.movie-section .fz-md {
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: Oswald !important;
  line-height: 1.5em;
}

h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

/** page title */
.payment-page-title .page-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 35px;
  height: 35px;
  float: left;
  margin-left: 12px;
  color: #494c62;
}

.user-info-item-label {
  font-family: SourceSansPro;
  font-size: 16px;
  font-weight: 600;
  color: #494c62;
}

.font-16 {
  font-size: 16px;
}
</style>
