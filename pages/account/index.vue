<template>
  <div class="container">
    <div class="row">
      <div class="account-section al-bg-light">
        <div class="account-tab fw-semibold">
          <ClientOnly>
            <a-tabs v-model="activeKey">
              <a-tab-pane key="1" tab="Thông Tin Tài Khoản">
                <Account :user="authStore.user" v-if="authStore.user" />
              </a-tab-pane>
              <a-tab-pane key="2" tab="Thẻ Thành Viên">
                <MemberCard />
              </a-tab-pane>
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
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "#imports";
import MemberCard from "@/components/account/MemberCard.vue";
import Voucher from "~/components/account/Voucher.vue";
import MovieViewHistory from "~/components/account/MovieViewHistory.vue";
import Point from "~/components/account/Point.vue";
definePageMeta({
  middleware: ["auth"],
});

const authStore = useAuthStore();
const activeKey = ref("1");
</script>
<style scoped>
.container {
  margin-top: 20px;
}
</style>
