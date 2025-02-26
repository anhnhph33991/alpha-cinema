<template>
  <div class="account-section al-bg-light">
    <div class="account-tab">
      <a-tabs v-model="activeKey">
        <a-tab-pane key="1" tab="Thông Tin Tài Khoản">
          <Account :user="authStore.user" v-if="authStore.user" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Thẻ Thành Viên">Tab Thẻ thành viên</a-tab-pane>
        <a-tab-pane key="3" tab="Hành Trình Điện Ảnh">
          Tab Hành Trình Điện Ảnh
        </a-tab-pane>
        <a-tab-pane key="4" tab="Điểm Alpha">Tab Điểm Alpha</a-tab-pane>
        <a-tab-pane key="5" tab="Voucher"> Tab Voucher </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "#imports";

const authStore = useAuthStore();

const activeKey = ref("1");
</script>
