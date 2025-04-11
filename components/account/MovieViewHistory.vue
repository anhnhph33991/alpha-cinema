<template>
  <div class="container mt-4 h-screen">
    <h4 class="text-custom fw-bold mt-4">LỊCH SỬ GIAO DỊCH</h4>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th>MÃ HÓA ĐƠN</th>
            <th>PHIM</th>
            <th>RẠP CHIẾU</th>
            <th>SUẤT CHIẾU</th>
            <th>GHẾ ĐÃ ĐẶT</th>
            <th>NGÀY ĐẶT</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="ticket in ticketStore.tickets" :key="ticket.id">
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
            <!-- <td class="align-content-center">
              {{
                ticket.ticket_foods
                  ? ticket.ticket_foods.map((food) => food.name).join(", ")
                  : "Chưa đặt"
              }},
              {{
                ticket.ticket_combos
                  ? ticket.ticket_combos.map((combo) => combo.name).join(", ")
                  : "Chưa đặt"
              }}
            </td> -->

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

onMounted(() => {
  if (authStore.isLogin) {
    ticketStore.loadTickets();
  }
});
</script>
