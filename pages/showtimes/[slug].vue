<template>
  <div class="movie-section padding-top bg-two" v-if="movieStore.showtime.data">
    <div class="showtime-choose-seat min-vh-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="choose-seat-row mt-3" v-if="isChoosingScreen">
              <div>
                <div class="d-flex justify-content-center">
                  <div class="row">
                    <div class="blinking-box mb-3">
                      <span class="blinking-text">
                        Theo quy định của cục điện ảnh, phim này không dành cho
                        khán giả dưới 16 tuổi.
                      </span>
                    </div>

                    <div class="mb-4 mt-4">
                      <!-- <div class="row">
                        <div
                          class="col-12 col-lg-3 col-md-6 col-xl-3 col-sm-12 bg-color d-flex justify-content-center align-items-center gap-2"
                        >
                          <div class="seat-cell seat-used seat-test"></div>
                          <span class="note-seat-status-lable">
                            Ghế trống
                          </span>
                        </div>
                        <div class="col-12 col-lg-3 col-md-6 col-xl-3 col-sm-12">
                          <div
                            class="col bg-color d-flex justify-content-center align-items-center gap-2"
                          >
                            <div
                              class="seat-cell seat-used seat-select seat-test"
                            ></div>
                            <span class="note-seat-status-lable">
                              Ghế đang chọn
                            </span>
                          </div>
                        </div>
                        <div class="col-12 col-lg-3 col-md-6 col-xl-3 col-sm-12">
                          <div
                            class="col bg-color d-flex justify-content-center align-items-center gap-2"
                          >
                            <div
                              class="seat-cell seat-used seat-hold seat-test"
                            ></div>
                            <span class="note-seat-status-lable">
                              Ghế đang giữ
                            </span>
                          </div>
                        </div>
                        <div class="col-12 col-lg-3 col-md-6 col-xl-3 col-sm-12">
                          <div
                            class="col bg-color d-flex justify-content-center align-items-center gap-2"
                          >
                            <div
                              class="seat-cell seat-used seat-sold seat-test"
                            ></div>
                            <span class="note-seat-status-lable">
                              Ghế đã bán
                            </span>
                          </div>
                        </div>
                      </div> -->

                      <div class="row align-items-center g-3">
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                          <div
                            class="bg-color d-flex justify-content-center align-items-center gap-2 h-100"
                          >
                            <div class="seat-cell seat-used seat-test"></div>
                            <span class="note-seat-status-lable"
                              >Ghế trống</span
                            >
                          </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                          <div
                            class="bg-color d-flex justify-content-center align-items-center gap-2 h-100"
                          >
                            <div
                              class="seat-cell seat-used seat-select seat-test"
                            ></div>
                            <span class="note-seat-status-lable"
                              >Ghế đang chọn</span
                            >
                          </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                          <div
                            class="bg-color d-flex justify-content-center align-items-center gap-2 h-100"
                          >
                            <div
                              class="seat-cell seat-used seat-hold seat-test"
                            ></div>
                            <span class="note-seat-status-lable"
                              >Ghế đang giữ</span
                            >
                          </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                          <div
                            class="bg-color d-flex justify-content-center align-items-center gap-2 h-100"
                          >
                            <div
                              class="seat-cell seat-used seat-sold seat-test"
                            ></div>
                            <span class="note-seat-status-lable"
                              >Ghế đã bán</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <img :src="screen" alt="luxchill" class="w-100" />
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
                              <!-- <span class="row-label">{{ rowName }}</span> -->
                              <div
                                v-for="seat in row"
                                :key="seat.id"
                                @click="handleChooseSeat(seat)"
                                :class="[
                                  'seat',
                                  { 'double-seat': seat.type_seat_id == 3 },
                                ]"
                              >
                                <template v-if="seat.type_seat_id == 1">
                                  <div
                                    class="seat-cell seat-used seat-test"
                                    :class="movieStore.mappingSeatNormal(seat)"
                                    :style="{
                                      color:
                                        seat.status !== 'available'
                                          ? 'white !important'
                                          : '',
                                    }"
                                  >
                                    {{ seat.coordinates_y
                                    }}{{ seat.coordinates_x }}
                                  </div>
                                </template>
                                <template v-if="seat.type_seat_id == 2">
                                  <div
                                    class="seat-cell seat-used seat-vip"
                                    :class="[movieStore.mappingSeatTwo(seat)]"
                                    :style="{
                                      color:
                                        seat.status !== 'available'
                                          ? 'white !important'
                                          : '',
                                    }"
                                  >
                                    {{ seat.coordinates_y
                                    }}{{ seat.coordinates_x }}
                                  </div>
                                </template>
                                <template v-if="seat.type_seat_id == 3">
                                  <div
                                    class="seat-cell seat-used seat-double"
                                    :class="[
                                      movieStore.mappingSeatDouble(seat),
                                    ]"
                                    :style="{
                                      color:
                                        seat.status !== 'available'
                                          ? 'white !important'
                                          : '',
                                    }"
                                  >
                                    {{ seat.coordinates_y
                                    }}{{ seat.coordinates_x }}
                                  </div>
                                </template>
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
                        <!-- <hr
                          v-if="index < filteredSeatGroups.length - 1"
                          style="margin-top: 15px"
                        /> -->

                        <hr style="margin-top: 15px" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <!-- <hr style="margin-top: 15px" /> -->

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
                                      :src="formattedImage(combo.img_thumbnail)"
                                      alt=""
                                      class="combo-image"
                                      width="100"
                                      height="100"
                                    />
                                  </td>
                                  <td class="combo-name">
                                    {{ combo.name }}
                                  </td>
                                  <td class="combo-description">
                                    {{ combo.description }}
                                  </td>
                                  <td>
                                    <div class="d-flex justify-content-center">
                                      <span class="mx-2">
                                        {{ getQuantity(combo.id) }}
                                      </span>
                                      <span
                                        class="mx-1 al-cursor-pointer"
                                        @click="increaseQuantity(combo)"
                                      >
                                        <img :src="btnAdd" alt="" />
                                        <!-- <button @click="increaseQuantity(combo)">
                                          +
                                        </button> -->
                                      </span>
                                      <span
                                        class="al-cursor-pointer"
                                        @click="decreaseQuantity(combo)"
                                      >
                                        <!-- <button @click="decreaseQuantity(combo)">
                                          -
                                        </button> -->

                                        <img :src="btnRemove" alt="" />
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="Đồ lẻ">
                          <div class="table-responsive">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col">Tên đồ ăn</th>
                                  <th scope="col">Mô tả</th>
                                  <th scope="col">Số lượng</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="combo in foodStore.foods"
                                  :key="combo.id"
                                >
                                  <td scope="row">
                                    <img
                                      :src="formattedImage(combo.img_thumbnail)"
                                      alt=""
                                      class="combo-image"
                                      width="100"
                                      height="100"
                                    />
                                  </td>
                                  <td class="combo-name">
                                    {{ combo.name }}
                                  </td>
                                  <td class="combo-description">
                                    {{ combo.description }}
                                  </td>
                                  <td>
                                    <div class="d-flex justify-content-center">
                                      <span class="mx-2">
                                        {{ getQuantityFood(combo.id) }}
                                      </span>
                                      <span
                                        class="mx-1 al-cursor-pointer"
                                        @click="handleIncreaseFood(combo)"
                                      >
                                        <img :src="btnAdd" alt="" />

                                        <!-- <button
                                        @click="handleIncreaseFood(combo)"
                                      >
                                        <img :src="btnAdd" alt="" />
                                      </button> -->
                                      </span>
                                      <span
                                        class="al-cursor-pointer"
                                        @click="handleDecreaseFood(combo)"
                                      >
                                        <!-- <button
                                        @click="handleDecreaseFood(combo)"
                                      >
                                        <img :src="btnRemove" alt="" />
                                      </button> -->

                                        <img :src="btnRemove" alt="" />
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </a-tab-pane>
                      </a-tabs>

                      <hr style="margin-top: 15px" />
                      <div class="voucher">
                        <div
                          class="col-lg-12 payment-page-title"
                          style="height: 35px; line-height: 35px"
                        >
                          <img
                            style="height: 100%; float: left"
                            src="https://betacinemas.vn/Assets/global/img/booking/ic-payment.png"
                          />
                          <div class="page-title" id="scroll-top">GIẢM GIÁ</div>
                        </div>
                        <div class="discount-section">
                          <div
                            class="beta-voucher"
                            @click.prevent="
                              isAlphaVoucherOpen = !isAlphaVoucherOpen
                            "
                          >
                            <span>Alpha Voucher</span>
                            <a href="#">
                              (Nhấn vào đây để xem danh sách voucher của bạn)
                            </a>
                          </div>

                          <div v-if="isAlphaVoucherOpen">
                            <hr class="discount-divider" />

                            <div class="voucher-form">
                              <div class="input-group">
                                <label>Mã Voucher</label>
                                <input
                                  type="text"
                                  placeholder="Nhập mã voucher vào đây"
                                  v-model.trim="useVoucher.code"
                                />
                              </div>

                              <div class="input-group">
                                <label>Mã PIN</label>
                                <input type="text" placeholder="" />
                              </div>

                              <button
                                class="apply-btn mt-4"
                                @click.prevent="handleApplyVoucher"
                              >
                                ĐĂNG KÝ
                              </button>
                            </div>

                            <div class="voucher-list">
                              <h4>VOUCHER CỦA BẠN</h4>
                              <table>
                                <thead>
                                  <tr>
                                    <th>Mã voucher</th>
                                    <th>Nội dung voucher</th>
                                    <th>Ngày hết hạn</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="voucher in voucherStore.vouchers"
                                    :key="voucher.voucher_id"
                                  >
                                    <template v-if="voucher.usage_count > 0">
                                      <td>
                                        {{ voucher.code }}
                                        (X{{ voucher.usage_count }})
                                      </td>
                                      <td>{{ voucher.title }}</td>
                                      <td>{{ voucher.end_date_time }}</td>
                                    </template>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div class="point-exchange-section">
                          <div
                            class="point-title"
                            @click.prevent="
                              isAlphaPointOpen = !isAlphaPointOpen
                            "
                          >
                            Điểm Alpha
                            <a href="#"
                              >(Nhấn vào đây để xem điểm tích lũy của bạn)</a
                            >
                          </div>
                          <div v-if="isAlphaPointOpen">
                            <hr class="point-divider" />

                            <div class="point-form">
                              <div class="point-info">
                                <span class="label">Điểm hiện có</span><br />
                                <span class="point-value">
                                  {{
                                    Number(authStore.user.point).toLocaleString(
                                      "vi-VN"
                                    )
                                  }}
                                </span>
                              </div>

                              <div class="input-group">
                                <label>Nhập điểm</label>
                                <input
                                  type="number"
                                  placeholder=""
                                  v-model.trim="useVoucher.point"
                                  :max="authStore.user.point"
                                />
                              </div>

                              <div class="discount-info">
                                <span class="label">Số tiền được giảm</span>
                                <span class="discount-value bold"
                                  >=
                                  {{
                                    Number(useVoucher.point).toLocaleString(
                                      "vi-VN"
                                    )
                                  }}
                                  vnđ</span
                                >
                              </div>

                              <button
                                type="button"
                                class="exchange-btn mt-4"
                                @click="handleApplyPoint"
                              >
                                ĐỔI ĐIỂM
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-3 item-seat-quantity">
                          Tổng tiền:
                        </div>
                        <div
                          class="col-md-3 item-seat-money item-seat-total-money total-money-name"
                        >
                          <!-- {{ priceAll.totalAmount.toLocaleString("vi-VN") }}đ -->
                          {{ totalWithTax.toLocaleString("vi-VN") }}đ
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
                          {{ priceAll.discountAmount.toLocaleString("vi-VN") }}đ
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
                          <!-- {{ priceAll.payableAmount.toLocaleString("vi-VN") }}đ -->
                          {{ payableWithTax.toLocaleString("vi-VN") }}đ
                        </div>
                      </div>
                    </div>

                    <div class="payment-method-section">
                      <div
                        class="col-lg-12 payment-page-title"
                        style="height: 35px; line-height: 35px"
                      >
                        <img
                          style="height: 100%; float: left"
                          src="https://betacinemas.vn/Assets/global/img/booking/ic-payment.png"
                        />

                        <div class="page-title" id="scroll-top">
                          PHƯƠNG THỨC THANH TOÁN
                        </div>
                      </div>
                      <p class="mt-3 bold">Chọn thẻ thanh toán</p>
                      <hr class="payment-divider" />

                      <div class="payment-options">
                        <label class="payment-option">
                          <input
                            type="radio"
                            name="payment"
                            value="momo"
                            v-model="selectedPayment"
                          />

                          <span class="custom-radio"></span>
                          <img src="/assets/icon-momo.png" alt="Ví MoMo" />
                          <span>Ví MoMo</span>
                        </label>

                        <label class="payment-option">
                          <input
                            type="radio"
                            name="payment"
                            value="vnpay"
                            v-model="selectedPayment"
                          />

                          <span class="custom-radio"></span>
                          <img src="/assets/icon-vnpay.png" alt="Ví VNpay" />
                          <span>Ví VNpay</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Chân trang showtime -->
            <div class="seat-row-footer bg-white seat-type-panel mb-5">
              <div>
                <div>
                  <div class="row">
                    <template v-if="isChoosingScreen">
                      <div class="col-lg-8">
                        <!-- <div class="row">
                          <div
                            class="col-lg-3 col-md-2 col-xl-3 col-sm-12 bg-color d-flex justify-content-center align-items-center gap-2"
                          >
                            <div class="seat-cell seat-used seat-test"></div>
                            <span class="note-seat-status-lable">
                              Ghế thường
                            </span>
                          </div>

                          <div
                            class="col-lg-3 col-md-2 col-xl-3 col-sm-12 bg-color d-flex justify-content-center align-items-center gap-2"
                          >
                            <div class="seat-cell seat-used seat-vip"></div>
                            <span class="note-seat-status-lable">
                              Ghế Vip
                            </span>
                          </div>

                          <div
                            class="col-lg-3 col-md-2 col-xl-3 col-sm-12 bg-color d-flex justify-content-center align-items-center gap-2"
                          >
                            <div class="seat-cell seat-used seat-double"></div>
                            <span class="note-seat-status-lable">
                              Ghế Đôi
                            </span>
                          </div>
                        </div> -->
                      </div>

                      <div class="col-lg-2">
                        <div class="total-price-label text-start">
                          Tổng tiền
                        </div>
                        <div class="total-price-value text-center">
                          <!-- {{ priceAll.totalAmount.toLocaleString("vi-VN") }}đ -->
                          {{ payableWithTax.toLocaleString("vi-VN") }}đ
                        </div>
                      </div>
                    </template>

                    <template v-else>
                      <div class="col-lg-10">
                        <div class="note-before-next">
                          Vui lòng kiểm tra thông tin đầy đủ trước khi qua bước
                          tiếp theo.
                        </div>
                        <div class="note-refund">
                          <span style="color: red">*</span>
                          Vé mua rồi không hoàn trả lại dưới mọi hình thức.
                        </div>
                      </div>
                    </template>

                    <div class="col-lg-2">
                      <div class="time-to-label text-start">
                        Thời gian còn lại
                      </div>
                      <div class="time-to-value text-end">
                        <a-statistic-countdown
                          :value="deadline"
                          @finish="onFinish"
                          format="mm:ss"
                        >
                        </a-statistic-countdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 sidebar">
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
                            <!-- {{ showtime.movie.category }} -->

                            {{
                              showtime.movie.movie_genres
                                ? showtime.movie.movie_genres
                                    .map((item) => item)
                                    .join(", ")
                                : "Chưa đặt"
                            }}
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
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <Armchair :size="18" />
                          Ghế ngồi:
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <span class="bold fz-md">
                            <p>{{ seatNames.join(", ") }}</p>
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
                    <li class="padding-bottom-10 padding-top-10">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <TvMinimal :size="18" />
                          Ghê ngồi:
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
import { usePaymentStore } from "~/stores/payment";
import { useVoucherStore } from "~/stores/voucher";
import { useRankStore } from "~/stores/rank";
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
import { useWindowScroll, useElementSize } from "@vueuse/core";
const { y } = useWindowScroll();

const movieStore = useMovieStore();
const foodStore = useFoodStore();
const paymentStore = usePaymentStore();
const ticketStore = useTicketStore();
const voucherStore = useVoucherStore();
const rankStore = useRankStore();
const route = useRoute();
// const slug = route.params.slug;
const slug = computed(() => route.params.slug);
const currentUserId = useAuthStore().user.id;
const config = useRuntimeConfig();

/**
 *
 */
const authStore = useAuthStore();

/**
 * Làm chức năng
 */
const isChoosingScreen = ref(true);

const formattedImage = (image) => {
  return image ? `${config.public.BackEndUrl}/storage/${image}` : "";
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
const screen = "https://betacinemas.vn/Assets/global/img/booking/ic-screen.png";

import SeatRegular from "~/assets/images/seat_regular.svg";
import SeatVip from "~/assets/images/seat_vip.svg";
import SeatDouble from "~/assets/images/seat_double.svg";

const btnRemove = "https://betacinemas.vn/Assets/global/img/booking/minus.png";
const btnAdd = "https://betacinemas.vn/Assets/global/img/booking/plus.png";

import { toast } from "vue-sonner";
const echo = useEcho();

const isAlphaVoucherOpen = ref(false);
const isAlphaPointOpen = ref(false);
const selectedPayment = ref(null);

const selectCinemaBranch = useCookie("selectCinemaBranch");

/**
 * Ngăn chặn spam click ghế
 */
const processingSeats = new Set();

const clonedSeatRows = ref([]);

const seatRows = computed(() => {
  return Object.entries(movieStore.showtime.data.seatMap).map(
    ([rowName, seats]) => ({
      row: rowName,
      seats: Object.values(seats),
    })
  );
});

const checkSoleSeats = computed(() => {
  let issueSeats = [];

  clonedSeatRows.value.forEach(({ row, seats }) => {
    let selectedIndexes = seats
      .map((seat, index) =>
        movieStore.isSeatSelected(seat) && seat.type_seat_id !== 3 ? index : -1
      )
      .filter((index) => index !== -1);

    for (let i = 0; i < selectedIndexes.length - 1; i++) {
      if (selectedIndexes[i + 1] - selectedIndexes[i] === 2) {
        const emptyIndex = selectedIndexes[i] + 1;
        if (!movieStore.isSeatSelected(seats[emptyIndex])) {
          issueSeats.push(`${row}${seats[emptyIndex].coordinates_x}`);
        }
      }
    }
  });

  return issueSeats;
});

const checkEdgeSeats = computed(() => {
  let issueSeats = [];

  clonedSeatRows.value.forEach(({ row, seats }) => {
    if (seats.length >= 2) {
      const firstSeat = seats[0];
      const secondSeat = seats[1];
      const lastSeat = seats[seats.length - 1];
      const beforeLastSeat = seats[seats.length - 2];

      if (
        !movieStore.isSeatSelected(firstSeat) &&
        movieStore.isSeatSelected(secondSeat) &&
        firstSeat.type_seat_id !== 3
      ) {
        issueSeats.push(`${row}${firstSeat.coordinates_x}`);
      }

      if (
        !movieStore.isSeatSelected(lastSeat) &&
        movieStore.isSeatSelected(beforeLastSeat) &&
        lastSeat.type_seat_id !== 3
      ) {
        issueSeats.push(`${row}${lastSeat.coordinates_x}`);
      }
    }
  });

  console.log("checkEdgeSeats");
  console.log(issueSeats);

  return issueSeats;
});

const cloneSeatRows = () => {
  clonedSeatRows.value = JSON.parse(JSON.stringify(seatRows.value));
};

const updateClonedSeat = (seatId, newStatus, newUserId) => {
  clonedSeatRows.value.forEach((row) => {
    row.seats.forEach((seat) => {
      if (seat.id === seatId) {
        seat.status = newStatus;
        seat.user_id = newUserId;
      }
    });
  });
};

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

  /** */

  console.log(seat);

  const newStatus =
    seat.status === "hold" && seat.user_id == currentUserId
      ? "available"
      : "hold";
  const newUserId = seat.user_id == currentUserId ? null : currentUserId;

  cloneSeatRows();
  updateClonedSeat(seat.id, newStatus, newUserId);

  console.log("new data seat");
  console.log(clonedSeatRows.value);

  const soleSeatsIssues = checkSoleSeats.value;
  const edgeSeatsIssues = checkEdgeSeats.value;

  if (soleSeatsIssues.length > 0) {
    toast.warning(`Bạn không được để trống ghế: ${soleSeatsIssues.join(", ")}`);
    return;
  }

  if (edgeSeatsIssues.length > 0) {
    toast.warning(`Bạn không được để trống ghế: ${edgeSeatsIssues.join(", ")}`);
    return;
  }

  processingSeats.add(seat.id);

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

const vatRate = computed(() => authStore.vat.rate); // 8%

const baseAmount = computed(() => priceAll.value.payableAmount);

// Tính tổng cộng có VAT
const totalWithVAT = computed(() => {
  return baseAmount.value + (baseAmount.value * vatRate.value) / 100;
});

const handleNextOrder = async () => {
  try {
    // toast.success("Thanh toán đê");
    // console.log(movieStore.seatSelected);

    if (!selectedPayment.value) {
      toast.error("Vui lòng chọn phương thức thanh toán");
      return;
    }

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
      voucher_code: useVoucher.code ? useVoucher.code : null,
      vat: authStore.vat.rate,
      voucher_discount: priceAll.value.discountFromVoucher
        ? priceAll.value.discountFromVoucher
        : 0,
      point_use: useVoucher.point ? useVoucher.point : 0,
      point_discount: useVoucher.point ? useVoucher.point : 0,
      payment_name: selectedPayment.value,
      ticket_seats: newDataSeats,
      ticket_combos: newDataCombo.length > 0 ? newDataCombo : null,
      ticket_foods: newDataFood.length > 0 ? newDataFood : null,
      // total_price: +((priceAll.value.payableAmount * authStore.vat.rate) / 100),
      total_price: +payableWithTax.value,
      expiry: `${movieStore.showtime.data.showTime.date}|${movieStore.showtime.data.showTime.end_time}`,
      status: "pending",
      price_percentage: {
        ticket_percentage: rankStore.rankByUser.ticket_percentage || 0,
        food_percentage: rankStore.rankByUser.combo_percentage || 0,
        price_ticket_percentage: handleSeatTotalPrice.value,
        price_food_percentage: handleDiscountedFoodTotalPrice.value,
      },
    };

    // console.log("giá tiền cũ 11/04/2025");
    // console.log(+((priceAll.value.payableAmount * authStore.vat.rate) / 100));

    console.log("giá tiền mới 11/04/2025");
    console.log(payableWithTax.value);

    console.log(">>>>>data ticket<<<<<");
    console.log(dataTicket);
    console.log(">>>>>data seat id<<<<<");
    console.log(seatId);
    console.log(">>>>>data seat<<<<<");
    console.log(newDataSeats);

    console.log("data voucher");
    console.log(useVoucher.code);

    // console.log("data new hehehe");

    // console.log("giá tiền ghế khi chưa trừ");
    // console.log(handleSeatTotalPrice.value);
    // // 256000;
    // console.log("giá tiền ghế khi đã trừ");

    // const priceSaleTicket =
    //   handleSeatTotalPrice.value -
    //   (handleSeatTotalPrice.value * rankStore.rankByUser.ticket_percentage) /
    //     100;

    // const discountedPrice =
    //   handleSeatTotalPrice.value *
    //   (1 - rankStore.rankByUser.ticket_percentage / 100);

    // console.log(discountedPrice);
    // // 230400
    // console.log("Phần trăm được giảm");
    // console.log(rankStore.rankByUser.ticket_percentage);

    console.log("giá tiền ghế");
    console.log(handleSeatTotalPrice.value);

    console.log("giá tiền tổng combo và food ban đầu");

    console.log(+handleComboFoodTotalPrice.value + +handleFoodTotalPrice.value);

    console.log("giá tiền tổng combo và food - 10% combo");
    console.log(handleDiscountedFoodTotalPrice.value);

    // return;
    // console.log(dataTicket);
    // console.log("voucher");
    // console.log(useVoucher.code);

    if (useVoucher.point <= 0 || useVoucher.point == "") {
      // console.log("change point after buy");

      // useVoucher.point_after = authStore?.user.point;

      useVoucher.point_after =
        Number(authStore.user.point) - Number(useVoucher.point);

      const feedbackPercentage =
        Number(rankStore.rankByUser.feedback_percentage) || 0;
      const payableAmount = Number(priceAll.value.payableAmount);

      // Đảm bảo các giá trị là số trước khi nhân chia
      const pointsToAdd = Math.floor(
        (feedbackPercentage / 100) * payableAmount
      );

      useVoucher.point_after += pointsToAdd;
    }

    paymentStore.paymentMomo(
      selectedPayment.value,
      dataTicket,
      seatId,
      useVoucher.point_after,
      useVoucher.code
    );

    // toast.success("Thanh toán thành công");
    // navigateTo({ name: "booking-success" });
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
    : []
);

const handleNextOrderOne = () => {
  if (movieStore.seatSelected?.length > 0) {
    isChoosingScreen.value = false;
  } else {
    toast.warning("Vui lòng chọn ít nhất 1 ghế");
  }
};

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
/**
 * Biến tiền
 *
 * totalAmount      = tổng tiền đơn hàng
 * discountAmount   = tổng tiền được giảm
 * payableAmount    = tổng tiền phải trả
 *
 *
 */
const priceAll = ref({
  totalAmount: 0,
  discountAmount: 0,
  payableAmount: 0,
  discountFromVoucher: 0,
  discountFromPoints: 0,
  discountFromVoucherSeat: 0,
  discountFromVoucherFood: 0,
  discountSeatAfter: 0,
});

// const handleTotalPrice = computed(() => {
//   if (!movieStore.seatSelected || movieStore.seatSelected.length === 0) {
//     return 0; // Trả về 0 nếu không có ghế nào được chọn
//   }

//   return movieStore.seatSelected.reduce((sum, seat) => sum + seat.price, 0);
// });

const handleSeatTotalPrice = computed(() => {
  // return (
  //   movieStore.seatSelected?.reduce((sum, seat) => sum + seat.price, 0) || 0
  // );

  const total =
    movieStore.seatSelected?.reduce((sum, seat) => sum + seat.price, 0) || 0;
  const discount = rankStore.rankByUser.ticket_percentage || 0;
  // return total * (1 - discount / 100);

  return Math.ceil(total * (1 - discount / 100));
});

// const handleComboFoodTotalPrice = computed(() => {
//   return (
//     newDataCombo?.reduce(
//       (sum, combo) => sum + combo.quantity * combo.price,
//       0
//     ) || 0
//   );
// });

// const handleFoodTotalPrice = computed(() => {
//   return (
//     newDataFood?.reduce((sum, food) => sum + food.quantity * food.price, 0) || 0
//   );
// });

const handleComboFoodTotalPrice = computed(() => {
  return (
    newDataCombo?.reduce(
      (sum, combo) =>
        sum +
        combo.quantity *
          (combo.price_sale > 0 ? combo.price_sale : combo.price),
      0
    ) || 0
  );
});

const handleFoodTotalPrice = computed(() => {
  return (
    newDataFood?.reduce((sum, food) => sum + food.quantity * food.price, 0) || 0
  );
});

// biến tính giá tiền đồ ăn được giảm từ rank

const handleDiscountedFoodTotalPrice = computed(() => {
  const total =
    (+handleComboFoodTotalPrice.value || 0) +
    (+handleFoodTotalPrice.value || 0);
  const discount = rankStore.rankByUser.combo_percentage || 0;

  // return total * (1 - discount / 100);
  return Math.ceil(total * (1 - discount / 100));
});

const handleTotalPrice = computed(() => {
  return (
    +handleSeatTotalPrice.value +
    // +handleComboFoodTotalPrice.value +
    // +handleFoodTotalPrice.value
    +handleDiscountedFoodTotalPrice.value
  );
});

// const

// const handleTotalPrice = computed(() => {
//   const seatTotal =
//     movieStore.seatSelected?.reduce((sum, seat) => sum + seat.price, 0) || 0;
//   const foodTotal = newDataCombo.reduce(
//     (sum, combo) => sum + combo.quantity * combo.price,
//     0
//   );

//   return seatTotal + foodTotal;
// });

/**
 * Xử lý combo fodd
 */
const newDataCombo = reactive([]);

const increaseQuantity = (combo) => {
  console.log("mua do an");

  const existingCombo = newDataCombo.find((item) => item.id == combo.id);

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
  const index = newDataCombo.findIndex((item) => item.id == combo.id);

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
  const combo = newDataCombo.find((item) => item.id == id);
  return combo ? combo.quantity : 0;
};

/**
 * Xử lý fodd
 */
const newDataFood = reactive([]);

const handleIncreaseFood = (food) => {
  const existingFood = newDataFood.find((item) => item.id == food.id);

  if (existingFood) {
    existingFood.quantity += 1;
  } else {
    newDataFood.push({ ...food, quantity: 1 });
  }
};

const handleDecreaseFood = (food) => {
  const index = newDataFood.findIndex((item) => item.id == food.id);

  if (index != -1) {
    if (newDataFood[index].quantity > 1) {
      newDataFood[index].quantity -= 1;
    } else {
      newDataFood.splice(index, 1);
    }
  }
};

const getQuantityFood = (id) => {
  const food = newDataFood.find((item) => item.id === id);
  return food ? food.quantity : 0;
};

/**
 * Thay đổi giá kèm vat
 */
// watch(movieStore.seatSelected, (newVal) => {
//   if (newVal.length > 0) {
//     console.log("lắng nghe seat update vat");

//     priceAll.value.totalAmount += priceAll.value.totalAmount * 0.08;
//     priceAll.value.payableAmount += priceAll.value.payableAmount * 0.08;
//   }
// });

// watch(
//   () => movieStore.seatSelected,
//   () => {}
// );

/**
 * Lắng nghe thay đổi của ghế để cập nhật giá tiền
 *
 */
watch(
  () => movieStore.seatSelected,
  () => {
    priceAll.value.totalAmount = handleTotalPrice.value;
    priceAll.value.payableAmount =
      handleTotalPrice.value - priceAll.value.discountAmount;

    // if (movieStore.seatSelected.length > 0) {
    //   priceAll.value.totalAmount = priceAll.value.totalAmount;
    //   priceAll.value.payableAmount = priceAll.value.payableAmount;
    // }

    // if (movieStore.seatSelected.length > 0) {
    //   priceAll.value.totalAmount += priceAll.value.totalAmount * 0.08;
    //   priceAll.value.payableAmount += priceAll.value.payableAmount * 0.08;
    // }
  },
  { deep: true, immediate: true }
);
/**
 * Lắng nghe thay đổi tất cả giá tiền từ handleTotalPrice / giá ghế, giá combo, giá food
 */
watch(handleTotalPrice, (newTotal) => {
  priceAll.value.totalAmount = newTotal;
  priceAll.value.payableAmount = newTotal - priceAll.value.discountAmount;
});
/**
 * Thay đổi tiền tổng khi có discountAmount
 */
watch(
  () => priceAll.value.discountAmount,
  (newDiscount) => {
    priceAll.value.payableAmount = priceAll.value.totalAmount - newDiscount;
  }
);
/**
 * Call all api with promose.all
 */
const promiseAllApi = async () => {
  try {
    await Promise.all([
      movieStore.fetchShowTimeBySlug(
        slug.value,
        selectCinemaBranch.value?.branch_id,
        selectCinemaBranch.value?.cinema_id
      ),
      foodStore.fetchFoods(),
      foodStore.fetchFoodCombo(),
      voucherStore.fetchVouchers(),
    ]);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Đếm thời gian
 */

const onFinish = async () => {
  console.log("finished!");
  toast.warning("Bạn đã hết thời gian giữ ghế");

  const seatId = movieStore.seatSelected.map((seat) => seat.id);
  const statusDefault = "available";
  const userId = authStore.user.id;
  const showtimeId = movieStore.showtime.data.showTime.id;

  await movieStore.resetAndBuySeat(showtimeId, seatId, userId, statusDefault);

  navigateTo("/");
};

const countdownDeadline = useCookie(`countdownDeadline-${slug.value}`, {
  maxAge: 600,
  // maxAge: 20,
  default: () => null, // Ban đầu đặt là null
});

const now = Date.now();

// Hàm tính deadline
const deadline = computed(() => {
  return countdownDeadline.value && countdownDeadline.value > now
    ? countdownDeadline.value
    : now + 1000 * 60 * 10;
});

watch(
  () => slug.value,
  (newSlug) => {
    if (!newSlug) return;
    console.log("Slug thay đổi:", newSlug);
  }
);

/**
 * Logic voucher
 */

const useVoucher = reactive({
  code: "",
  point: 0,
  point_after: 0,
});

const handleApplyVoucher = () => {
  const applyVoucher = voucherStore.vouchers.find(
    (voucher) => voucher.code === useVoucher.code
  );

  console.log(applyVoucher);

  if (!applyVoucher) {
    toast.error("Voucher không chính xác");
    return;
  }

  // console.log(applyVoucher);

  if (applyVoucher.usage_count <= 0) {
    toast.error("Không còn voucher 🤬");
    return;
  }

  if (applyVoucher.type_voucher == 1) {
    // const totalPriceFoodAndCombo =
    //   +handleComboFoodTotalPrice.value + +handleFoodTotalPrice.value;
    const totalPriceFoodAndCombo = +handleDiscountedFoodTotalPrice;

    priceAll.value.discountFromVoucherSeat = +handleSeatTotalPrice.value;

    // console.log("giá đồ ăn");
    // console.log(totalPriceFoodAndCombo);
    // console.log("giá giảm dành riêng cho đồ ăn");
    // console.log(applyVoucher.discount);
    // return;

    if (totalPriceFoodAndCombo <= 0) {
      toast.error("Bạn chưa chọn đồ ăn nào, không thể sử dụng voucher này");
      return;
    }

    if (totalPriceFoodAndCombo < +applyVoucher.discount) {
      toast.error("Giá đồ ăn quá thấp, không thể sử dụng voucher");
      return;
    }

    priceAll.value.discountFromVoucherFood =
      +totalPriceFoodAndCombo - applyVoucher.discount;

    // console.log("giá combo");
    // console.log(handleComboFoodTotalPrice.value);

    // console.log("giá đồ lẻ");
    // console.log(handleFoodTotalPrice.value);

    console.log("tổng giá đồ ăn");
    console.log(totalPriceFoodAndCombo);

    console.log("giảm giá đồ ăn");
    console.log(priceAll.value.discountFromVoucherFood);

    console.log("giá ghế đã trừ");
    console.log(priceAll.value.discountFromVoucherSeat);
  } else {
    console.log("voucher ghế");
    console.log(handleSeatTotalPrice.value);

    priceAll.value.discountFromVoucherSeat =
      +handleSeatTotalPrice.value - +applyVoucher.discount;

    // priceAll.value.discountFromVoucherFood =
    //   +handleComboFoodTotalPrice.value + +handleFoodTotalPrice.value;
    priceAll.value.discountFromVoucherFood =
      +handleDiscountedFoodTotalPrice.value;

    // console.log("giá ghế đã trừ");
    // console.log(priceAll.value.discountFromVoucherSeat);
    // console.log("giảm giá đồ ăn");
    // console.log(priceAll.value.discountFromVoucherFood);

    if (priceAll.value.discountSeatAfter <= 0) {
      priceAll.value.discountSeatAfter = handleSeatTotalPrice.value;
    }

    if (
      priceAll.value.discountSeatAfter - +applyVoucher.discount <
      handleSeatTotalPrice.value * 0.3
    ) {
      toast.warning(
        "Không thể dùng điểm vì tổng số tiền giảm vượt quá 70% giá gốc"
      );
      return;
    }
  }
  // return;

  priceAll.value.discountFromVoucher = +applyVoucher.discount;
  // applyVoucher.usage_count -= 1;
  console.log(priceAll.value.discountFromVoucher);

  // return;
  priceAll.value.discountAmount =
    priceAll.value.discountFromVoucher + priceAll.value.discountFromPoints;

  /**
   *
   */
  priceAll.value.discountSeatAfter -= +applyVoucher.discount;

  console.log(priceAll.value.discountAmount);
  console.log(priceAll.value.totalAmount);
};

const handleApplyPoint = () => {
  const maxPoints = authStore.user.point || 0;
  const applyPoints = Number(useVoucher.point) || 0;

  const maxUsablePoints = Math.floor(priceAll.value.totalAmount * 0.5);

  if (applyPoints > maxPoints) {
    toast.error("Bạn không đủ điểm tiêu dùng");
    useVoucher.point = 0;
    return;
  }

  if (applyPoints < 0) {
    toast.error("Không được nhập âm");
    useVoucher.point = 0;
    return;
  }

  console.log("giá vé");
  console.log(handleSeatTotalPrice.value);

  // priceAll.value.discountFromVoucherSeat

  // if (applyPoints > Number(priceAll.value.totalAmount)) {
  //   toast.error("Bạn chỉ có thể sử dụng tối đa 50% số tiền tổng đơn hàng.");
  //   useVoucher.point = Math.min(maxPoints, maxUsablePoints);
  //   return;
  // }

  // nếu chưa dùng voucher đặt giá tiền ghế vào giá giảm
  if (priceAll.value.discountSeatAfter <= 0) {
    priceAll.value.discountSeatAfter = handleSeatTotalPrice.value;
  }

  // console.log("giá tiền 03");
  // console.log(handleSeatTotalPrice.value * 0.3);
  // console.log("giá tiền giảm");
  // console.log(priceAll.value.discountFromVoucherSeat - applyPoints);

  if (
    priceAll.value.discountSeatAfter - applyPoints <
    handleSeatTotalPrice.value * 0.3
  ) {
    toast.warning(
      "Không thể dùng điểm vì tổng số tiền giảm vượt quá 70% giá gốc"
    );
    return;
  }

  priceAll.value.discountFromPoints = applyPoints;
  priceAll.value.discountAmount =
    priceAll.value.discountFromVoucher + priceAll.value.discountFromPoints;

  /**
   * discountSeatAfter là giá tiền cuối sẽ check là 70% giá ghế
   */

  priceAll.value.discountSeatAfter -= applyPoints;
  console.log("giá ghế mới");
  console.log(priceAll.value.discountSeatAfter);

  // console.log(applyPoints);

  // useVoucher.point_after = priceAll.value.payableAmount * 0.05;

  // useVoucher.point_after = authStore.user.point - useVoucher.point;

  // const feedbackPercentage = rankStore.rankByUser.feedback_percentage || 0;

  // useVoucher.point_after += Math.floor(
  //   (feedbackPercentage / 100) * priceAll.value.payableAmount
  // );

  useVoucher.point_after =
    Number(authStore.user.point) - Number(useVoucher.point);

  const feedbackPercentage =
    Number(rankStore.rankByUser.feedback_percentage) || 0;
  const payableAmount = Number(priceAll.value.payableAmount);

  // Đảm bảo các giá trị là số trước khi nhân chia
  const pointsToAdd = Math.floor((feedbackPercentage / 100) * payableAmount);

  useVoucher.point_after += pointsToAdd;

  // console.log(feedbackPercentage);

  // console.log("rank user");
  // console.log(rankStore.rankByUser);
  // console.log("poin apply");
  // console.log(useVoucher.point);
  // console.log("giá tiền ghế đã giảm");
  // console.log(priceAll.value.discountSeatAfter);

  // priceAll.value.discountAmount = discountAmount.value
};

/**
 * 11/04/2025
 */

// const totalWithTax = computed(() => {
//   const amount = priceAll.value.totalAmount;
//   return amount > 0 ? amount + amount * 0.08 : 0;
// });

// const payableWithTax = computed(() => {
//   const amount = priceAll.value.payableAmount;
//   return amount > 0 ? amount + amount * 0.08 : 0;
// });

const totalWithTax = computed(() => {
  const amount = Number(priceAll.value.totalAmount);
  const rate = Number(authStore.vat.rate / 100); // chuyển từ 8 thành 0.08
  // return amount > 0 ? amount + amount * rate : 0;
  return Math.ceil(amount > 0 ? amount + amount * rate : 0);
});

const payableWithTax = computed(() => {
  const amount = Number(priceAll.value.payableAmount);
  const rate = Number(authStore.vat.rate / 100);
  // return amount > 0 ? amount + amount * rate : 0;
  return Math.ceil(amount > 0 ? amount + amount * rate : 0);
});

/**
 * 11/04/2025
 */

//**
// Code new
//  */

//**
// Code new
//  */

/**
 * Khi chọn chi nhánh mới trên header nếu đang trong màn hình chọn ghế chuyển qua chi nhánh không có xuất chiếu sẽ call lại api
 */
watch(
  selectCinemaBranch,
  async (newData, oldData) => {
    if (newData) {
      movieStore.fetchShowTimeBySlug(
        slug.value,
        newData.branch_id,
        newData.cinema_id
      );
    }
  },
  { deep: true }
);

onMounted(() => {
  promiseAllApi();
  callEcho();

  if (!countdownDeadline.value) {
    countdownDeadline.value = now + 1000 * 60 * 10;
  }
});

onUnmounted(() => {
  echo.leaveChannel("showtime");
});
</script>

<style scoped>
/* code css new */

.seat-used {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-size: 35px 35px;
  background-position: center;
  color: #fff;
  font-family: SFProText;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
}

.seat-cell {
  width: 40px;
  /* float: left; */
  height: 40px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-size: 11px;
}

.seat-test {
  background-image: url("https://betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png");
}

.seat-hold.seat-test {
  background-image: url("/public/images/seat-process-normal.png");
}

.seat-used.seat-sold.seat-test {
  background-image: url("/public/images/seat-buy-normal.png");
}

.seat-select.seat-test {
  background-image: url("/public/images/seat-select-normal.png");
}

.seat-vip {
  background-image: url("https://betacinemas.vn/Assets/global/img/booking/seat-unselect-vip.png");
}

.seat-used.seat-hold.seat-vip {
  background-image: url("/public/images/seat-process-vip.png");
}

.seat-used.seat-sold.seat-vip {
  background-image: url("/public/images/seat-buy-vip.png");
}

.seat-used.seat-select.seat-vip {
  background-image: url("/public/images/seat-select-vip.png");
}

.seat-double {
  background-image: url("https://betacinemas.vn/Assets/global/img/booking/seat-unselect-double.png");
}

.seat-used.seat-hold.seat-double {
  background-image: url("/public/images/seat-process-double.png");
}

.seat-used.seat-sold.seat-double {
  background-image: url("/public/images/seat-buy-double.png");
}

.seat-used.seat-select.seat-double {
  background-image: url("/public/images/seat-select-double.png");
}

.seat-used.seat-double {
  width: 90px !important;
  background-size: 60px 30px;
}

.seat-used {
  color: #494c62 !important;
}

.seat-used.seat-select.seat-normal {
  background-image: url("https://betacinemas.vn/Assets/global/img/booking/seat-select-normal.png");
}

/* code css new */
.blinking-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
}
.count-mix {
  margin-top: 10px;
}

.btn-custom {
  padding: 10px 0px;
  background-color: #007bff;
  color: black;
}

.table > :not(caption) > * > * {
  background-color: #f8f8f8;
}

.blinking-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;

  animation: blink-bg 2s infinite;
  background-color: #faebd7;
  text-align: center;
}

@keyframes blink-bg {
  0% {
    background-color: #faebd7;
  }

  /* Màu nền ban đầu */
  50% {
    background-color: #fdcb96;
  }

  /* Màu nền nhấp nháy */
  100% {
    background-color: #faebd7;
  }
}

.blinking-text {
  font-weight: bold;
  color: red;
}

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
  /* background-color: #007bff; */
  color: #007bff;
}

.sold {
  /* background-color: red; */
  color: red;
}

.hold {
  /* background-color: #ffc107; */
  color: #ffc107;
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
  /* border: 1px solid #ddd; */
  border-radius: 6px;
  /* border: 1px solid #ddd; */

  cursor: pointer;
  /* Chỉ có cursor khi ghế có dữ liệu */
}

.double-seat {
  width: 84px !important;
  height: 40px !important;
}
.sidebar {
  position: sticky;
  top: 100px; /* Điều chỉnh khoảng cách từ đỉnh, lớn hơn chiều cao của menu (giả sử menu cao 80px) */
  height: fit-content; /* Đảm bảo sidebar không vượt quá nội dung của nó */
  z-index: 100; /* Đảm bảo sidebar không bị menu đè (menu thường có z-index cao) */
  transition: all 0.3s ease-in-out; /* Hiệu ứng mượt mà khi cuộn hoặc hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Thêm bóng để trông nổi bật */
  /* border-radius: 10px;  */
  background: #fff;
}

/* Hiệu ứng khi hover vào sidebar */
.sidebar:hover {
  transform: translateY(-5px); /* Nhấc nhẹ sidebar lên khi hover */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Tăng bóng khi hover */
}

/* Làm mượt mà hơn cho các nút trong sidebar-footer */
.sidebar-footer .btn {
  transition: all 0.3s ease; /* Hiệu ứng mượt mà cho nút */
}

/* Hiệu ứng hover cho nút */
.sidebar-footer .btn:hover {
  transform: scale(1.05); /* Phóng to nhẹ khi hover */
  background-color: #0056b3; /* Màu đậm hơn khi hover */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Thêm bóng cho nút */
}

/* Đảm bảo các phần tử bên trong sidebar trông hài hòa */
.sidebar .bg-white {
  border-radius: 10px; /* Bo góc phần nội dung */
  overflow: hidden; /* Đảm bảo nội dung không tràn ra ngoài */
}

/* Tinh chỉnh các phần tử con để đồng bộ */
.sidebar ul li {
  transition: background 0.2s ease; /* Hiệu ứng mượt cho các mục trong danh sách */
}

.sidebar ul li:hover {
  background-color: #f8f9fa; /* Màu nền nhẹ khi hover vào các mục */
  border-radius: 5px; /* Bo góc nhẹ */
}

/* Làm đẹp hơn cho hình ảnh trong sidebar */
.pi-img-wrapper img {
  transition: transform 0.3s ease; /* Hiệu ứng mượt cho hình ảnh */
}

.pi-img-wrapper img:hover {
  transform: scale(1.02); /* Phóng to nhẹ hình ảnh khi hover */
}

/* Đảm bảo menu không đè lên sidebar */
.menu {
  /* Thay .menu bằng class thực tế của menu */
  z-index: 50; /* Đặt z-index thấp hơn sidebar */
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
  font-size: 17px;
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
  font-size: 17px !important;
}

.sidebar-md {
  display: none;
}

.movie-section .seat-type-panel {
  padding: 15px 10px;
  margin-top: 40px;
  width: 100%;
}

.movie-section .total-price-label {
  font-family: Oswald;
  font-size: 18px;
  color: #494c62;
}

.movie-section .total-price-value {
  font-family: Oswald;
  font-size: 18px;
  margin-top: 10px;
  color: #494c62;
  color: #03599d;
}

.movie-section .time-to-label {
  font-family: Oswald;
  font-size: 18px;
  color: #494c62;
}

.movie-section .time-to-value {
  font-family: Oswald;
  color: #1e1f28;
  font-weight: 600;
}

.movie-section .time-to-value .ant-statistic-content {
  font-family: Oswald;
  color: #1e1f28;
  font-size: 37.9px !important;
  font-weight: 600;
}

.note-refund,
.note-before-next {
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  padding-left: 15px;
  color: #000000;
}

.table-responsive table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.table thead th {
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  padding: 12px;
}

.table tbody tr {
  display: table-row;
  text-align: center;
  vertical-align: middle;
}

.table tbody td {
  text-align: center;
  vertical-align: middle;
  padding: 12px;
}

.combo-name {
  font-weight: bold;
  font-size: 16px;
  text-align: left;
}

.combo-description {
  font-size: 14px;
  max-width: 250px;
  line-height: 1.4;
  text-align: center;
}

.table td span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.quantity-controls button {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
}

.quantity-controls .increase {
  background-color: #0056b3;
  color: white;
}

.quantity-controls .decrease {
  background-color: #d3d3d3;
  color: black;
}

.quantity-btn {
  width: 25px;
  height: 25px;
  background-color: #f8f9fa;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-value {
  min-width: 30px;
  text-align: center;
}

.discount-section {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #d1d5db;
}

/* Tiêu đề "GIẢM GIÁ" */
.discount-title {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #1e1f28;
  margin-bottom: 5px;
}

.discount-title img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

/* Beta Voucher */
.beta-voucher {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #1e1f28;
  margin-top: 5px;
}

.beta-voucher img {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

.beta-voucher a {
  font-style: italic;
  color: #007bff;
  text-decoration: none;
  font-weight: normal;
  margin-left: 5px;
}

.beta-voucher a:hover {
  text-decoration: underline;
}

/* Đường kẻ ngang */
.discount-divider {
  margin-top: 10px;
  border-bottom: 1px solid #d1d5db;
}

/* Form nhập voucher */
.voucher-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}

.input-group {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 45%;
}

.input-group label {
  font-size: 14px;
  font-weight: bold;
  color: #494c62;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

/* Nút đăng ký */
.apply-btn {
  background: linear-gradient(to right, #ff5f6d, #ff9966);
  border: none;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}

.apply-btn:hover {
  background: linear-gradient(to right, #ff9966, #ff5f6d);
}

/* Bảng danh sách voucher */
.voucher-list {
  margin-top: 20px;
}

.voucher-list h4 {
  font-size: 16px;
  font-weight: bold;
  color: #494c62;
  margin-bottom: 10px;
}

.voucher-list table {
  width: 100%;
  border-collapse: collapse;
}

.voucher-list table thead {
  background-color: #f8f9fa;
}

.voucher-list table th,
.voucher-list table td {
  border: 1px solid #d1d5db;
  padding: 8px;
  text-align: left;
}

/* Container chính */
.point-exchange-section {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #d1d5db;
  margin: 50px 0;
}

/* Tiêu đề "Điểm Beta" */
.point-title {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #1e1f28;
  margin-bottom: 5px;
}

.point-title img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.point-title a {
  font-style: italic;
  color: #007bff;
  text-decoration: none;
  font-weight: normal;
  margin-left: 5px;
}

.point-title a:hover {
  text-decoration: underline;
}

/* Đường kẻ ngang */
.point-divider {
  margin-top: 10px;
  border-bottom: 1px solid #d1d5db;
}

.point-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.point-group {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 30%;
}

.point-value {
  font-size: 18px;
  color: #000;
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.input-group label {
  font-size: 14px;
  font-weight: bold;
  color: #494c62;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

.discount-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #494c62;
  text-align: center;
}

.discount-value {
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

/* Nút đổi điểm */
.exchange-btn {
  background: linear-gradient(to right, #ff5f6d, #ff9966);
  border: none;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}

.exchange-btn:hover {
  background: linear-gradient(to right, #ff9966, #ff5f6d);
}

/* Thanh toán */
.payment-method-section {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin: 20px 0;
}

.payment-divider {
  margin-top: 5px;
  border-bottom: 1px solid #d1d5db;
}

.payment-options {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 10px;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
}

.payment-option input {
  display: none;
}

.custom-radio {
  width: 16px;
  height: 16px;
  border: 2px solid #555;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

.payment-option input:checked + .custom-radio::after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: #0044cc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.payment-option img {
  width: 40px;
  height: 40px;
}

.payment-option span {
  font-size: 16px;
  font-weight: bold;
  color: #1e1f28;
}

/* icon ghế */
.seat-icon {
  width: 40px;
  /* Độ rộng ghế */
  height: auto;
  transition: transform 0.2s ease-in-out;
}

.selected .seat-icon {
  filter: brightness(1.2);
}

.sold .seat-icon {
  filter: grayscale(100%);
}

.hold .seat-icon {
  filter: sepia(70%);
}

.seat:hover .seat-icon {
  transform: scale(1.1);
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
