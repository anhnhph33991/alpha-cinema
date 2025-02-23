<template>
  <div
    class="movie-section padding-top bg-two"
    v-if="movieStore.showtime?.data"
  >
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
    <div class="seat-plan-section padding-bottom padding-top">
      <div class="container">
        <div class="screen-area">
          <h4 class="screen">theater</h4>
          <div class="screen-thumb">
            <img :src="screen" alt="movie" />
          </div>
          <!-- <h5 class="subtitle">single seat plan</h5>
          <div class="screen-wrapper">
            <ul class="seat-area">
              <li class="seat-line">
                <span>H</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">h5</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-booked.png"
                          alt="seat"
                        />
                        <span class="sit-num">h6</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">h7</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-booked.png"
                          alt="seat"
                        />
                        <span class="sit-num">h8</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">h9</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">h10</span>
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>H</span>
              </li>
              <li class="seat-line">
                <span>G</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">g1</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">g2</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">g3</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">g4</span>
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>G</span>
              </li>
              <li class="seat-line">
                <span>f</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">f7</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">f8</span>
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">f9</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">f10</span>
                      </li>
                      <li class="single-seat seat-free">
                        <img
                          src="/theme/img/movie/seat-1-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">f11</span>
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-1.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>f</span>
              </li>
            </ul>
          </div>
          <h5 class="subtitle">double seat plan</h5>
          <div class="screen-wrapper">
            <ul class="seat-area couple">
              <li class="seat-line">
                <span>e</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">e1 e2</span>
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">e3 e4</span>
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>e</span>
              </li>
              <li class="seat-line">
                <span>d</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-booked.png"
                          alt="seat"
                        />
                        <span class="sit-num booked-bg">D7 D8</span>
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>d</span>
              </li>
              <li class="seat-line">
                <span>c</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">c11 c12</span>
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>c</span>
              </li>
              <li class="seat-line">
                <span>b</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">b1 b2</span>
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">b3 b4</span>
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">b7 b8</span>
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src="/theme/img/movie/seat-2.png" alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>b</span>
              </li>
              <li class="seat-line">
                <span>a</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-booked.png"
                          alt="seat"
                        />
                        <span class="sit-num booked-bg">a1 a2</span>
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">a3 a4</span>
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">a5 a6</span>
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">a7 a8</span>
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">a9 a10</span>
                      </li>
                    </ul>
                  </li>
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-booked.png"
                          alt="seat"
                        />
                        <span class="sit-num booked-bg">a11</span>
                      </li>
                      <li class="single-seat seat-free-two">
                        <img
                          src="/theme/img/movie/seat-2-free.png"
                          alt="seat"
                        />
                        <span class="sit-num">a12</span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>a</span>
              </li>
            </ul>
          </div> -->

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
                },
              ]"
              @click="handleChooseSeat(seat)"
            >
              <SeatRegular />
            </div>
          </div>
        </div>
        <div class="proceed-book">
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
              <a href="movie-checkout.html" class="custom-button"
                >checkout now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ==========Movie-Section========== -->
  </div>
</template>

<script setup>
import { useMovieStore } from "~/stores/movie";
import { useAuthStore } from "~/stores/auth";

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

  await movieStore.chooseSeat(
    movieStore.showtime.data.showTime.id,
    seat.id,
    currentUserId,
    newStatus
  );
};

const callEcho = () => {
  console.log("🔥 Đang lắng nghe kênh showtime...");
  const channel = echo.channel("showtime");
  console.log("🟢 Đã vào channel:", channel);

  channel.listen("RealTimeSeatEvent", (data) => {
    console.log("🔥 Nhận dữ liệu từ Pusher:", data);
    console.log(data);

    updateSeatStatus(data.seat_id, data.status, data.user_id);
  });
};

const updateSeatStatus = (seatId, newStatus, userId) => {
  if (!movieStore.showtime.data.seatMap) {
    console.warn("⚠️ seatMap chưa được load!");
    return;
  }

  Object.keys(movieStore.showtime.data.seatMap).forEach((row) => {
    Object.keys(movieStore.showtime.data.seatMap[row]).forEach((col) => {
      if (movieStore.showtime.data.seatMap[row][col].id === seatId) {
        movieStore.showtime.data.seatMap[row][col].status = newStatus;
        movieStore.showtime.data.seatMap[row][col].user_id = userId;

        console.log(movieStore.showtime.data.seatMap[row][col]);

        getSeatClass(movieStore.showtime.data.seatMap[row][col]);
        isSeatSelected(movieStore.showtime.data.seatMap[row][col]);
        isSeatHeldByOthers(movieStore.showtime.data.seatMap[row][col]);
      }
    });
  });

  console.log(`✅ Cập nhật ghế ${seatId} thành ${newStatus}`);
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
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
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
</style>
