<template>
  <div class="h-screen">
    <div class="d-flex justify-content-center align-items-center">
      <div>
        <a-result
          status="success"
          title="Cảm ơn bạn đã mua hàng"
          sub-title="Chúc bạn có một trả nghiệm đáng nhớ"
        >
          <template #extra>
            <a-button
              key="console"
              type="primary"
              @click="navigateTo({ name: 'index' })"
              >Quay về trang chủ</a-button
            >
            <!-- <a-button key="buy">Buy Again</a-button> -->
          </template>
        </a-result>
      </div>
    </div>
  </div>
</template>

<script setup></script>
