<template>
  <div class="container mt-4 h-screen" v-if="ticketStore?.tickets.length > 0">
    <h4 class="text-custom fw-bold mt-4">LỊCH SỬ GIAO DỊCH</h4>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th class="text-center">Ảnh Phim</th>
            <th class="text-center">MÃ HÓA ĐƠN</th>
            <th class="text-center">PHIM</th>
            <th class="text-center">RẠP CHIẾU</th>
            <th class="text-center">SUẤT CHIẾU</th>
            <th class="text-center">GHẾ ĐÃ ĐẶT</th>
            <th class="text-center">NGÀY ĐẶT</th>
            <th class="text-center"></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="ticket in ticketStore.tickets"
            :key="ticket.id"
            class="text-center"
          >
            <td class="align-content-center">
              <img
                :src="
                  ticket.movie?.img_thumbnail
                    ? formatImage(ticket.movie?.img_thumbnail)
                    : 'https://static.thenounproject.com/png/4595376-200.png'
                "
                alt="Ảnh phim"
                width="50"
                height="50"
              />
            </td>
            <td class="align-content-center">
              {{ ticket.code }}
            </td>
            <td class="align-content-center">{{ ticket.movie.name }}</td>
            <td class="align-content-center">
              {{ ticket.branch.name }} - {{ ticket.cinema.name }}
            </td>
            <td class="align-content-center">
              {{ ticket.showtime.start_time }}
            </td>
            <td class="align-content-center">
              {{
                ticket.ticket_seats
                  ? ticket.ticket_seats.map((seat) => seat.seat_name).join(", ")
                  : "Chưa đặt"
              }}
            </td>

            <td class="align-content-center">
              {{ formatVietnamTime(ticket.created_at) }}
            </td>

            <td class="align-content-center">
              <NuxtLink
                :to="{
                  name: 'account-order-code',
                  params: { code: ticket.code },
                }"
                class="btn btn-sm bg-warning"
              >
                <EyeOutlined :style="{ verticalAlign: '0px' }" />
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div
    class="d-flex align-content-center align-items-center justify-content-center min-vh-100"
    v-else
  >
    <a-empty description="Không có dữ liệu"></a-empty>
  </div>
</template>

<style>
.text-custom {
  color: #043c4d;
}
</style>

<script setup>
import { onMounted } from "vue";
import { useTicketStore } from "@/stores/ticket";
import { useAuthStore } from "@/stores/auth";

const config = useRuntimeConfig();

function formatVietnamTime(utcString) {
  const date = new Date(utcString);

  // Cộng 7 tiếng để chuyển sang giờ Việt Nam
  date.setHours(date.getHours() + 7);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // JS đếm tháng từ 0
  const year = date.getFullYear();

  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${hour}:${minute} ${day}/${month}/${year}`;
}

const ticketStore = useTicketStore();
const authStore = useAuthStore();

const formatImage = (image) => {
  return `${config.public.BackEndUrl}/storage/${image}`;
};

onMounted(() => {
  if (authStore.isLogin) {
    ticketStore.loadTickets();
  }
});
</script>
