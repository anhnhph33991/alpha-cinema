<template>
  <div class="container mt-4">
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
            <th>COMBO/PACKAGE</th>
            <th>NGÀY ĐẶT</th>
            <th>ĐIỂM</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="ticket in ticketStore.tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.movie.name }}</td>
            <td>{{ ticket.branch.name }} - {{ ticket.cinema.name }}</td>
            <td>{{ ticket.showtime.start_time }}</td>
            <td>
              {{
                ticket.ticket_seats
                  ? ticket.ticket_seats.map((seat) => seat.seat_name).join(", ")
                  : "Chưa đặt"
              }}
            </td>
            <td>
              {{ ticket.ticket_foods || ticket.ticket_foods || "Không có" }}
            </td>
            <td>
              {{ new Date(ticket.created_at).toLocaleDateString("vi-VN") }}
            </td>
            <td class="text-danger fw-bold">
              {{ ticket.point_use ? `- ${ticket.point_use}` : "0" }}
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

const ticketStore = useTicketStore();
const authStore = useAuthStore();

onMounted(() => {
  if (authStore.isLogin) {
    ticketStore.loadTickets();
  }
});
</script>
