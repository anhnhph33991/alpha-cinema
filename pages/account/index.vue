<template>
    <div class="account-section al-bg-light">
        <div class="account-tab">
            <a-tabs v-model="activeKey">
                <a-tab-pane key="1" tab="Thông Tin Tài Khoản">
                    <Account :user="authStore.user" v-if="authStore.user" />
                </a-tab-pane>
                <a-tab-pane key="2" tab="Thẻ Thành Viên">
                    <AccountCartMemmber :user="authStore.user" v-if="authStore.user" />
                </a-tab-pane>
                <a-tab-pane key="3" tab="Hành Trình Điện Ảnh">
                    <AccountHistoryMovie :user="authStore.user" v-if="authStore.user" />
                </a-tab-pane>
                <a-tab-pane key="4" tab="Điểm Alpha">
                    <AccountPoints :user="authStore.user" v-if="authStore.user" />
                </a-tab-pane>
                <a-tab-pane key="5" tab="Voucher">
                    <AccountVoucher :user="authStore.user" v-if="authStore.user" />
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script setup>
// G: \laragon\laragon\www\alpha - cinema\components\account\HistoryMovie.vue
// G: \laragon\laragon\www\alpha - cinema\components\account/CartMemmber.vue
import { AccountPoints, AccountVoucher, AccountCartMemmber, AccountHistoryMovie } from "#components";
import { useAuthStore } from "#imports";


definePageMeta({
  middleware: ["auth"],
});

const authStore = useAuthStore();

const activeKey = ref("1");
</script>
