<template>
  <div class="movie-section padding-top bg-two" v-if="movieStore.showtime.data">
    <!-- ==========Banner-Section========== -->
    <section
      class="details-banner hero-area seat-plan-banner"
      style="background: url('/theme/img/banner/banner-movie-details.jpg')"
    >
      <div class="container">
        <div class="details-banner-wrapper">
          <div class="details-banner-content style-two">
            <h3 class="title">
              {{ movieStore.showtime.data.showTime.movie.name }}
            </h3>
            <!-- <div class="tags">
              <a href="movie-seat-plan.html#">MOVIE</a>
              <a href="movie-seat-plan.html#">2D</a>
              <a href="movie-seat-plan.html#">3D</a>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- ==========Banner-Section========== -->

    <!-- ==========Movie-Section========== -->
    <div class="seat-plan-section padding-bottom">
      <div class="screen-thumb">
        <img :src="screen" alt="movie" />
      </div>
      <div class="container">
        <div class="screen-area">
          <!-- <div class="screen-thumb">
            <img :src="screen" alt="movie" />
          </div> -->

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
    </div>
    <!-- ==========Movie-Section========== -->
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
import { Armchair, Sofa } from "lucide-vue-next";

const movieStore = useMovieStore();
const route = useRoute();
const slug = route.params.slug;
const currentUserId = useAuthStore().user.id;

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

onMounted(() => {
  movieStore.fetchShowTimeBySlug(slug);
  callEcho();
});

onUnmounted(() => {
  echo.leaveChannel("showtime");
});
</script>

<style>
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
</style>
