<template>
  <div class="container min-vh-100">
    <ClientOnly>
      <a-page-header style="border: 1px solid rgb(235, 237, 240)">
        <template #breadcrumb>
          <a-breadcrumb>
            <a-breadcrumb-item v-for="(route, index) in routes" :key="index">
              <NuxtLink v-if="index !== routes.length - 1" :to="route.path">
                {{ route.breadcrumbName }}
              </NuxtLink>
              <span v-else>
                {{ route.breadcrumbName }}
              </span>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </template>
      </a-page-header>
    </ClientOnly>

    <div
      v-if="ticketStore.isLoading"
      class="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <a-spin />
    </div>

    <div class="row" v-else>
      <div class="col-xl-9 col-lg-12 col-md-12">
        <div class="card mt-2 mb-5">
          <div class="card-header">
            <div class="d-flex justify-content-between p-2">
              <div class="fst-normal fw-bold">Thông tin vé</div>
              <div>
                <span
                  class="badge"
                  :class="mappingStatus[ticketStore.ticket?.status]?.class"
                >
                  {{ mappingStatus[ticketStore.ticket?.status]?.label || "" }}
                </span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <img
                  :src="formatImage(ticketStore.ticket?.movie?.img_thumbnail)"
                  alt="phim hay"
                  class="mb-3 w-100 h-75"
                />
              </div>
              <div class="col-lg-8">
                <div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="ticket-info-title text-center">
                        <h6
                          class="mb-4 fs-4 fw-bold text-start"
                          style="color: rgb(81, 86, 190)"
                        >
                          {{ ticketStore.ticket?.movie?.name }}
                        </h6>
                      </div>
                    </div>
                    <div class="col-3 text-16">Lịch chiếu</div>
                    <div class="col-9 text-start text-16 fw-medium mb-2">
                      {{ ticketStore.ticket?.showtime?.start_time }} -
                      {{ ticketStore.ticket?.showtime?.end_time }} ({{
                        ticketStore.ticket?.showtime?.date
                      }})
                    </div>
                    <div class="col-3 text-16">Thời lượng</div>
                    <div class="col-9 text-start text-16 fw-medium mb-2">
                      {{ ticketStore.ticket?.movie?.duration }} phút
                    </div>

                    <div class="col-3 text-16">Định dạng</div>
                    <div class="col-9 text-start text-16 fw-medium mb-2">
                      {{ ticketStore.ticket?.movie?.movie_versions[0] }}
                    </div>

                    <div class="col-3 text-16">Phòng chiếu</div>
                    <div class="col-9 text-start text-16 fw-medium mb-2">
                      {{ ticketStore.ticket?.room?.name }}
                    </div>

                    <div class="col-3 text-16">Thể loại</div>
                    <div class="col-9 text-start text-16 fw-medium mb-2">
                      <span
                        v-for="(genres, index) in ticketStore.ticket?.movie
                          ?.movie_genres"
                        :key="index"
                      >
                        {{
                          genres === "Horror"
                            ? "Kinh dị"
                            : genres === "Action"
                            ? "Hành động"
                            : genres === "Comedy"
                            ? "Hài"
                            : genres
                        }}
                        <span
                          v-if="
                            index <
                            ticketStore.ticket?.movie?.movie_genres.length - 1
                          "
                          >,
                        </span>
                      </span>
                    </div>

                    <div class="col-3 text-16">Ghế ngồi</div>
                    <div class="col-9 text-start text-16 fw-medium mb-2">
                      <div class="row">
                        <span
                          class="col-2 border border-secondary-subtle rouder-3 mx-1 mb-2 text-center"
                          v-for="seat in ticketStore.ticket?.ticket_seats"
                          :key="seat.id"
                        >
                          {{ seat.seat_name }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <hr class="mt-4" v-if="isHasComboOrFood" /> -->
              <div class="col-xl-12" v-if="isHasComboOrFood">
                <div class="fs-5 fw-semibold mb-2">Đồ ăn</div>

                <!-- combo -->
                <div
                  class="row"
                  v-if="ticketStore.ticket?.ticket_combos?.length > 0"
                >
                  <div
                    class="col-md-6 mb-3"
                    v-for="combo in ticketStore.ticket?.ticket_combos"
                    :key="combo.id"
                  >
                    <div class="card h-100">
                      <div class="card-body row">
                        <div class="col-4">
                          <img
                            class="w-100"
                            :src="formatImage(combo?.img_thumbnail)"
                            :alt="combo.name"
                          />
                        </div>
                        <div class="col-8">
                          <h6 class="card-title">
                            {{ combo.name }}
                          </h6>
                          <ul class="list-unstyled mb-2">
                            <li v-for="food in combo?.foods" :key="food.id">
                              {{ food.name }} (SL: {{ food.quantity }})
                            </li>
                          </ul>
                          <p class="mb-0">
                            {{ combo?.quantity }} x
                            {{ formatPrice(getComboPrice(combo)) }}đ =
                            <span class="price">
                              {{ formatPrice(totalComboPrice(combo)) }}đ
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Food -->
                <div
                  class="row"
                  v-if="ticketStore.ticket?.ticket_foods?.length > 0"
                >
                  <div
                    class="col-md-6 mb-3"
                    v-for="food in ticketStore.ticket?.ticket_foods"
                    :key="food.id"
                  >
                    <div class="card h-100">
                      <div class="card-body row">
                        <div class="col-4">
                          <img
                            class="w-100 h-75"
                            :src="formatImage(food?.img_thumbnail)"
                            alt="Sinh tố bơ"
                          />
                        </div>
                        <div class="col-8">
                          <h6 class="card-title">
                            {{ food?.name }}
                          </h6>

                          <p class="mb-0">
                            {{ food?.quantity }} x
                            {{ formatPrice(food?.price) }} =
                            <span class="price">
                              {{ formatPrice(totalFoodPrice(food)) }}đ
                            </span>
                          </p>
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

      <div class="col-xl-3 col-lg-12 col-md-12">
        <div class="card mt-2">
          <div class="card-header">
            <div class="d-flex justify-content-between p-2">
              <div class="fst-normal fw-bold">Thông tin người đặt</div>
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="mb-1">
                <span class="text-body-secondary"> Tên: </span>
                <small class="fw-medium">
                  {{ authStore?.user?.name }}
                </small>
              </div>
              <div class="mb-1">
                <span class="text-body-secondary"> Email: </span>
                <small class="fw-medium">
                  {{ authStore?.user?.email }}
                </small>
              </div>
              <div class="mb-1">
                <span class="text-body-secondary"> Sđt: </span>
                <small
                  class="fw-medium"
                  :class="{ 'text-danger': !authStore?.user?.phone }"
                >
                  {{ authStore?.user?.phone || "Chưa cập nhật" }}
                </small>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-2">
          <div class="card-header">
            <div class="d-flex justify-content-between p-2">
              <div class="fst-normal fw-bold">Thông tin thanh toán</div>
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="mb-1">
                <span class="text-body-secondary"> Thời gian: </span>
                <!-- <small class="fw-medium">20:03 - 11/04/2025</small> -->
                <small class="fw-medium">
                  {{ formatDateTime(ticketStore.ticket?.created_at) }}
                </small>
              </div>
              <div class="mb-1">
                <span class="text-body-secondary"> Phương thức: </span>
                <small class="fw-medium">
                  {{ ticketStore.ticket?.payment_name?.toUpperCase() }}
                </small>
              </div>
              <div
                class="mb-1"
                v-if="
                  ticketStore.ticket?.price_percentage?.price_ticket_percentage
                "
              >
                <span class="text-body-secondary">Tiền vé: </span>
                <small class="fw-medium text-danger">
                  {{
                    formatPrice(
                      (ticketStore.ticket?.price_percentage
                        ?.price_ticket_percentage -
                        (ticketStore.ticket?.voucher_type == 1
                          ? ticketStore.ticket?.voucher_discount
                          : 0) -
                        ticketStore.ticket?.point_discount) *
                        (1 + ticketStore.ticket?.vat / 100)
                    )
                  }}đ
                </small>
              </div>

              <div
                class="mb-1"
                v-if="
                  ticketStore.ticket?.price_percentage?.price_food_percentage
                "
              >
                <span class="text-body-secondary"> Tiền đồ ăn: </span>
                <small class="fw-medium text-danger">
                  {{
                    formatPrice(
                      (ticketStore.ticket?.price_percentage
                        ?.price_food_percentage -
                        (ticketStore.ticket?.voucher_type == 0
                          ? ticketStore.ticket?.voucher_discount
                          : 0)) *
                        (1 + ticketStore.ticket?.vat / 100)
                    )
                  }}
                </small>
              </div>

              <div class="mb-1">
                <span class="text-body-secondary"> Tổng tiền: </span>
                <small class="fw-medium text-danger">
                  {{ formatPrice(ticketStore.ticket?.total_price) }}đ
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTicketStore } from "@/stores/ticket";
import { useAuthStore } from "@/stores/auth";

const config = useRuntimeConfig();
const route = useRoute();

const ticketStore = useTicketStore();
const authStore = useAuthStore();

const code = route.params.code;

const routes = [
  {
    path: "/",
    breadcrumbName: "Trang chủ",
  },
  {
    path: "/account",
    breadcrumbName: "Đặt vé",
  },
  {
    path: "code",
    breadcrumbName: `${code}`,
  },
];

const formatImage = (image) => {
  return `${config.public.BackEndUrl}/storage/${image}`;
};
/**
 *  Mapping label và class dựa vào status của order
 */
const mappingStatus = {
  pending: {
    label: "Chờ xác nhận",
    class: "bg-warning",
  },
  confirmed: {
    label: "Đã xác nhận",
    class: "bg-success",
  },
};
/**
 * Tính toán tổng tiền của combo
 */
const totalComboPrice = (combo) => {
  const price = combo?.price_sale > 0 ? combo.price_sale : combo.price;
  return (combo?.quantity || 0) * (price || 0);
};
/**
 * Tính toán tổng tiền của food
 */
const totalFoodPrice = (food) => {
  return (food?.quantity || 0) * (food?.price || 0);
};
/**
 * Format giá tiền về định dạng việt nam
 */
const formatPrice = (price) => {
  const integerPrice = Math.floor(price);
  return new Intl.NumberFormat("vi-VN").format(integerPrice);
};
/**
 *  Lấy giá tiền của từng combo
 */
const getComboPrice = (combo) => {
  return combo?.price_sale > 0 ? combo.price_sale : combo.price;
};
/**
 * Định dạng ngày
 */
const formatDateTime = (isoString) => {
  if (!isoString) return "Không rõ thời gian";

  const date = new Date(isoString);

  const time = date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const day = date.toLocaleDateString("vi-VN");

  return `${time} - ${day}`;
};
/**
 * Kiểm tra đồ ăn tồn tại
 */
const isHasComboOrFood = computed(() => {
  return (
    (ticketStore.ticket?.ticket_combos?.length || 0) > 0 ||
    (ticketStore.ticket?.ticket_foods?.length || 0) > 0
  );
});

// const isHasComboOrFood = computed(() => {
//   return (
//     (ticketStore.ticket?.ticket_combos?.length || 0) > 0 ||
//     (ticketStore.ticket?.ticket_foods?.length || 0) > 0
//   );
// });

onMounted(() => {
  // console.log(code);

  ticketStore.findByCode(code);
});
</script>

<style>
:where(
    .css-dev-only-do-not-override-1p3hq3p
  ).ant-page-header.ant-page-header-ghost {
  background-color: white;
}

@media (max-width: 720px) {
  /* Your CSS rules here */
  .row > .col-lg-4 {
    display: flex;
    justify-content: center;
  }
  .row > .col-lg-4 > img {
    max-width: 64%;
    max-height: 80%;
  }
  .text-16 {
    font-size: 14px !important;
  }
}
</style>
