<script setup>
import { ref, onMounted } from 'vue'
import { fetchSettingService } from "@/services/setting";

const siteInfo = ref(null)

onMounted(async () => {
  try {
    siteInfo.value = await fetchSettingService();
    console.log("siteInfo.value", siteInfo.value);
  } catch (error) {
    console.error("Không thể tải dữ liệu từ Backend:", error);
  }
});

const formattedImage = (image) => {
  return image ? `https://alphacinema.me/${image}` : "";
};
</script>

<template>
  <div
    v-if="siteInfo"
    class="site-wrapper"
    :style="siteInfo.background_image ? `background-image: url(${formattedImage(siteInfo.background_image)})` : ''"
  >
    <div class="overlay"></div>
    <div class="container py-5">
      <!-- Phần Header -->
      <div class="text-center mb-5">
        <img
          v-if="siteInfo.terms_of_service_image"
          class="content-img img-fluid shadow-lg rounded-4 border border-primary"
          :alt="siteInfo.name"
          :src="formattedImage(siteInfo.terms_of_service_image)"
        />
        <h1 class="fw-bold mt-3 text-gradient animated-gradient">{{ siteInfo.site_name }}</h1>
        <p class="text-white fs-5">{{ siteInfo.slogan }}</p>
      </div>

      <!-- Giới thiệu -->
      <section class="p-5 shadow-lg rounded-4 content-card">
        <h2 class="text-white fw-semibold mb-3">🌟 Điều khoản dịch vụ  </h2>
        <div class="text-light fs-5" v-html="siteInfo.terms_of_service"></div>
      </section>
    </div>
  </div>

  <!-- Hiển thị khi chưa có dữ liệu -->
  <div v-else class="text-center py-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Đang tải...</span>
    </div>
  </div>
</template>

<style scoped>
/* Ảnh nền với hiệu ứng làm mờ */
.site-wrapper {
  position: relative;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.site-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

/* Ảnh */
.content-img {
  max-width: 90%;
  max-height: 350px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}
.content-img:hover {
  transform: scale(1.05);
}

/* Hiệu ứng Gradient động */
.animated-gradient {
  background: linear-gradient(270deg, #91ff7e, #ff758c, #399b12, #ff758c);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 5s infinite ease-in-out;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Card nội dung */
.content-card {
  background: rgba(121, 140, 135, 0.55);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}
.content-card:hover {
  transform: translateY(-5px);
}
</style>