<template>
  <div class="movie-section padding-top bg-two" v-if="movieStore.showtime.data">
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
                                  movieStore.getSeatClass(seat),
                                  {
                                    selected: movieStore.isSeatSelected(seat),
                                    hold: movieStore.isSeatHeldByOthers(seat),
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
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div
                  class="d-flex align-items-center align-content-center gap-2"
                >
                  <div v-if="seatNames.length > 0">
                    <p>Các ghế đã chọn:</p>
                  </div>

                  <div class="d-flex gap-2">
                    <p
                      v-for="(seat, index) in seatNames"
                      :key="index"
                      class="fw-bold"
                    >
                      {{ seat }}
                      <span v-if="index != seatNames.length - 1">,</span>
                    </p>
                  </div>
                </div>

                <div>
                  <a-statistic-countdown
                    :value="deadline"
                    style="margin-right: 50px"
                    @finish="onFinish"
                    format="mm:ss"
                  >
                    <template #title>
                      <span>Countdown</span>
                      <a-tooltip placement="right">
                        <template #title>
                          <span>hurry up!</span>
                        </template>
                        <question-circle-two-tone style="margin-left: 5px" />
                      </a-tooltip>
                    </template>
                  </a-statistic-countdown>
                </div>
              </div>
            </div>

            <div
              class="choose-seat-row payment-form mt-3"
              v-if="!isChoosingScreen"
            >
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
                        <span class="bold user-info-item-label"> Họ Tên: </span>
                        <br />
                        <span class="user-info-item-value">
                          {{ authStore.user.name }}
                        </span>
                      </div>
                    </div>

                    <div
                      class="col-lg-4 col-md-4 payment-user-info"
                      style="margin-top: 25px; margin-bottom: 0px"
                    >
                      <div class="col-md-5 user-info-item font-16">
                        <span class="bold user-info-item-label">
                          Số điện thoại:
                        </span>
                        <br />
                        <span class="user-info-item-value">
                          {{ authStore.user.phone }}
                        </span>
                      </div>
                    </div>

                    <div
                      class="col-lg-4 col-md-4 payment-user-info"
                      style="margin-top: 25px; margin-bottom: 0px"
                    >
                      <div class="col-md-5 user-info-item font-16">
                        <span class="bold user-info-item-label"> Email: </span>
                        <br />
                        <span class="user-info-item-value">
                          {{ authStore.user.email }}
                        </span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div class="col-lg-12 ticket-selected mt-5">
                      <div
                        v-for="(data, index) in filteredSeatGroups"
                        :key="index"
                      >
                        <div>
                          <div class="row">
                            <div class="col-md-6 item-seat-type">
                              {{ data.name }}
                            </div>
                            <div class="col-md-3 item-seat-quantity">
                              {{ data.seats.length }} x
                              {{ data.seats[0]?.price.toLocaleString() }}
                            </div>
                            <div class="col-md-3 item-seat-money">
                              = {{ data.totalPrice.toLocaleString() }}đ
                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <hr
                          v-if="index < filteredSeatGroups.length - 1"
                          style="margin-top: 15px"
                        />
                      </div>
                    </div>
                    <hr data-v-aa786bab="" style="margin-top: 15px" />
                    <div class="col-lg-12">
                      <a-tabs v-model="activeKey">
                        <a-tab-pane key="1" tab="Combo">
                          <div class="table-responsive">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col">Tên combo</th>
                                  <th scope="col">Mô tả</th>
                                  <th scope="col">Số lượng</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="combo in foodStore.foodCombo"
                                  :key="combo.id"
                                >
                                  <td scope="row">
                                    <img
                                      src="https://files.betacorp.vn/media/combopackage/2024/06/05/combo-online-26-101802-050624-36.png"
                                      alt=""
                                      class="combo-image"
                                      width="130"
                                      height="130"
                                    />
                                  </td>
                                  <td class="combo-name">
                                    {{ combo.name }}
                                  </td>
                                  <td class="combo-description">
                                    {{ combo.description }}
                                  </td>
                                  <td>
                                    <span> {{ getQuantity(combo.id) }} </span>
                                    <span>
                                      <button @click="increaseQuantity(combo)">
                                        +
                                      </button>
                                    </span>
                                    <span>
                                      <button @click="decreaseQuantity(combo)">
                                        -
                                      </button>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="Đồ lẻ">
                          <a-empty />
                        </a-tab-pane>
                      </a-tabs>
                    </div>
                    <hr />
                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-3 item-seat-quantity">
                          Tổng tiền:
                        </div>
                        <div
                          class="col-md-3 item-seat-money item-seat-total-money total-money-name"
                        >
                          {{ priceAll.totalAmount.toLocaleString("vi-VN") }}đ
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-3 item-seat-quantity">
                          Tiền được giảm:
                        </div>
                        <div
                          class="col-md-3 item-seat-money item-seat-total-money total-money-name"
                        >
                          0đ
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-3 item-seat-quantity">
                          Tiền cần thanh toán:
                        </div>
                        <div
                          class="col-md-3 item-seat-money item-seat-total-money total-money-name"
                        >
                          {{ priceAll.totalAmount.toLocaleString("vi-VN") }}đ
                        </div>
                      </div>
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
                      Mua hàng
                    </button>
                  </template>

                  <button
                    class="btn btn-primary"
                    @click="handleNextOrderOne"
                    v-if="isChoosingScreen"
                  >
                    Tiếp theo
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 sidebar-md" :style="{ top: sidebarTop + 'px' }">
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
                      Mua hàng
                    </button>
                  </template>

                  <button
                    class="btn btn-primary"
                    @click="handleNextOrderOne"
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
import { useFoodStore } from "~/stores/food";
import { useTicketStore } from "~/stores/ticket";
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
const foodStore = useFoodStore();
const ticketStore = useTicketStore();
const route = useRoute();
const slug = route.params.slug;
const currentUserId = useAuthStore().user.id;

/**
 *
 */
const authStore = useAuthStore();

/**
 * Làm chức năng
 */
const isChoosingScreen = ref(true);

const formattedImage = (image) => {
  return image ? `https://alphacinema.me/storage/${image}` : "";
};

const showtime = computed(() => movieStore.showtime.data?.showTime || null);

/**
 * data tav movie
 */

const activeKey = ref("1");

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

const handleChooseSeat = async (seat) => {
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
  const newUserId = seat.user_id == currentUserId ? null : currentUserId;

  processingSeats.add(seat.id);

  // movieStore.applyRealTimeSeatChange(seat.id, newStatus, newUserId);

  movieStore.chooseSeat(
    movieStore.showtime.data.showTime.id,
    seat.id,
    newUserId,
    newStatus
  );

  processingSeats.delete(seat.id, newUserId, newStatus);
};

const callEcho = () => {
  const channel = echo.channel("showtime");

  channel.listen("RealTimeSeatEvent", (data) => {
    movieStore.applyRealTimeSeatChange(data.seat_id, data.status, data.user_id);
  });
};

const handleNextOrder = async () => {
  try {
    // toast.success("Thanh toán đê");
    // console.log(movieStore.seatSelected);

    const seatId = movieStore.seatSelected.map((seat) => seat.id);

    const newDataSeats = movieStore.seatSelected.map((seat) => ({
      id: seat.id,
      user_id: seat.user_id,
      price: seat.price,
      coordinates_x: seat.coordinates_x,
      coordinates_y: seat.coordinates_y,
      type_seat_id: seat.type_seat_id || null,
      seat_name: `${seat.coordinates_y}${seat.coordinates_x}`,
    }));

    // console.log(seatId);

    // console.log(`user_id: ${movieStore.currentUserId}`);

    const dataTicket = {
      user_id: movieStore.currentUserId,
      cinema_id: movieStore.showtime.data.showTime.cinema_id,
      room_id: movieStore.showtime.data.showTime.room_id,
      movie_id: movieStore.showtime.data.showTime.movie_id,
      showtime_id: movieStore.showtime.data.showTime.id,
      voucher_code: null,
      voucher_discount: 0,
      point_use: 0,
      point_discount: 0,
      payment_name: "",
      ticket_seats: newDataSeats,
      ticket_combos: newDataCombo.length > 0 ? newDataCombo : null,
      total_price: priceAll.value.payableAmount,
      expiry: `${movieStore.showtime.data.showTime.date}|${movieStore.showtime.data.showTime.end_time}`,
      status: "pending",
    };

    console.log(">>>>>data ticket<<<<<");
    console.log(dataTicket);
    console.log(">>>>>data seat id<<<<<");
    console.log(seatId);
    console.log(">>>>>data seat<<<<<");
    console.log(newDataSeats);

    // const ticketResponse = await ticketStore.createTicket(dataTicket);

    // if (!ticketResponse) {
    //   throw new Error("Tạo ticket không thành công");
    // }

    // call api reset ghế

    // await movieStore.resetAndBuySeat(
    //   movieStore.showtime.data.showTime.id,
    //   seatId,
    //   movieStore.currentUserId,
    //   "sold"
    // );

    toast.success("Thanh toán thành công");
    navigateTo({ name: "booking-success" });
  } catch (error) {
    console.log(error);
    toast.error("Có lỗi xảy ra");
  }
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

/** new  */
const seatNames = computed(() =>
  movieStore.seatSelected?.length
    ? movieStore.seatSelected.map(
        (seat) => `${seat.coordinates_y}${seat.coordinates_x}`
      )
    : // .join(",")
      []
);

const handleNextOrderOne = () => {
  if (movieStore.seatSelected?.length > 0) {
    isChoosingScreen.value = false;
  } else {
    toast.warning("Vui lòng chọn ít nhất 1 ghế");
  }
};

//

// const groupedSeats = computed(() => {
//   const categories = {
//     1: { name: "Ghế Thường", seats: [], totalPrice: 0 },
//     2: { name: "Ghế Vip", seats: [], totalPrice: 0 },
//     3: { name: "Ghế Đôi", seats: [], totalPrice: 0 },
//   };

//   movieStore.seatSelected.forEach((seat) => {
//     if (categories[seat.type_seat_id]) {
//       categories[seat.type_seat_id].seats.push(seat);
//       categories[seat.type_seat_id].totalPrice += seat.price;
//     }
//   });

//   return categories;
// });

const filteredSeatGroups = computed(() => {
  const categories = {
    1: { name: "Ghế Thường", seats: [], totalPrice: 0 },
    2: { name: "Ghế Vip", seats: [], totalPrice: 0 },
    3: { name: "Ghế Đôi", seats: [], totalPrice: 0 },
  };

  movieStore.seatSelected.forEach((seat) => {
    if (categories[seat.type_seat_id]) {
      categories[seat.type_seat_id].seats.push(seat);
      categories[seat.type_seat_id].totalPrice += seat.price;
    }
  });

  // Chỉ lấy những nhóm có ghế được chọn
  return Object.values(categories).filter((group) => group.seats.length > 0);
});

const priceAll = ref({
  totalAmount: 0,
  discountAmount: 0,
  payableAmount: 0,
});

// const handleTotalPrice = computed(() => {
//   if (!movieStore.seatSelected || movieStore.seatSelected.length === 0) {
//     return 0; // Trả về 0 nếu không có ghế nào được chọn
//   }

//   return movieStore.seatSelected.reduce((sum, seat) => sum + seat.price, 0);
// });

const handleTotalPrice = computed(() => {
  const seatTotal =
    movieStore.seatSelected?.reduce((sum, seat) => sum + seat.price, 0) || 0;
  const foodTotal = newDataCombo.reduce(
    (sum, combo) => sum + combo.quantity * combo.price,
    0
  );

  return seatTotal + foodTotal;
});

const newDataCombo = reactive([]);

const increaseQuantity = (combo) => {
  console.log("mua do an");

  const existingCombo = newDataCombo.find((item) => item.id === combo.id);

  if (existingCombo) {
    // Nếu combo đã tồn tại, chỉ tăng số lượng
    existingCombo.quantity += 1;
  } else {
    // Nếu combo chưa tồn tại, clone rồi push vào mảng
    newDataCombo.push({ ...combo, quantity: 1 });
  }

  console.log("Tăng số lượng:", newDataCombo);
};

const decreaseQuantity = (combo) => {
  const index = newDataCombo.findIndex((item) => item.id === combo.id);

  if (index !== -1) {
    if (newDataCombo[index].quantity > 1) {
      newDataCombo[index].quantity -= 1;
    } else {
      // Nếu số lượng = 1 và bấm giảm => Xóa khỏi mảng
      newDataCombo.splice(index, 1);
    }
  }

  console.log("Giảm số lượng:", newDataCombo);
};

const getQuantity = (id) => {
  const combo = newDataCombo.find((item) => item.id === id);
  return combo ? combo.quantity : 0;
};

watch(handleTotalPrice, (newTotal) => {
  priceAll.value.totalAmount = newTotal;
  priceAll.value.payableAmount = newTotal - priceAll.value.discountAmount;
});
/**
 * Call all api with promose.all
 */
const promiseAllApi = async () => {
  try {
    await Promise.all([
      movieStore.fetchShowTimeBySlug(slug),
      foodStore.fetchFoods(),
      foodStore.fetchFoodCombo(),
    ]);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Đếm thời gian
 */

const onFinish = () => {
  console.log("finished!");
};
const deadline = Date.now() + 1000 * 60 * 10;

onMounted(() => {
  promiseAllApi();
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

.payment-form .item-seat-type {
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1e1f28;
  text-transform: uppercase;
}

.payment-form .item-seat-quantity {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #494c62;
}

.payment-form .item-seat-money {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #494c62;
}

.payment-form .total-money-name {
  color: rgb(253, 40, 2) !important;
  font-size: 20px !important;
}

.sidebar-md {
  display: none;
}

/** responsive */

@media (max-width: 950px) {
  .movie-section .showtime-choose-seat .sidebar {
    display: none;
  }

  .movie-section .showtime-choose-seat .sidebar-md {
    display: block;
  }
}
</style>
