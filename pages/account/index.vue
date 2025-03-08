<template>
  <div class="account-section al-bg-light">
    <div class="account-tab">
      <a-tabs v-model="activeKey">
        <a-tab-pane key="1" tab="Thông Tin Tài Khoản">
          <Account :user="authStore.user" v-if="authStore.user" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Thẻ Thành Viên">Tab Thẻ thành viên</a-tab-pane>
        <a-tab-pane key="3" tab="Hành Trình Điện Ảnh">
          <MovieViewHistory />
        </a-tab-pane>
        <a-tab-pane key="4" tab="Điểm Alpha">
          <Point />
        </a-tab-pane>
        <a-tab-pane key="5" tab="Voucher">
          <Voucher />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup>
import Voucher from "~/components/account/Voucher.vue";
import MovieViewHistory from "~/components/account/MovieViewHistory.vue";
import Point from "~/components/account/Point.vue";
import { useAuthStore } from "#imports";

definePageMeta({
  // middleware: ["auth"],
});

const authStore = useAuthStore();

const activeKey = ref("1");
// const LazyVoucher = defineAsyncComponent(() => import("~/components/account/Voucher.vue"));
</script>
