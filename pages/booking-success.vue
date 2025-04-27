<template>
  <div class="h-screen">
    <div
      class="d-flex justify-content-center align-items-center align-content-center h-screen"
    >
      <div class="booking-page">
        <ClientOnly>
          <a-result
            status="success"
            title="Cảm ơn bạn đã mua hàng"
            sub-title="Chúc bạn có một trả nghiệm đáng nhớ"
          >
            <template #extra>
              <a
                style="display: block"
                class="btn btn-2 btn-mua-ve2 fancybox-fast-view"
                @click="navigateTo({ name: 'index' })"
              >
                Quay về trang chủ
              </a>

              <!-- <a-button key="buy">Buy Again</a-button> -->
            </template>
          </a-result>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ClientOnly } from "#components";
</script>

<style scoped>
.booking-page
  :where(.css-dev-only-do-not-override-1p3hq3p)[class^="ant-result"],
:where(.css-dev-only-do-not-override-1p3hq3p)[class*=" ant-result"] {
  font-family: "Oswald", sans-serif !important;
}
</style>
