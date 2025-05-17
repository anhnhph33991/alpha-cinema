<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchSettingService } from "@/services/setting";
import { useBranchStore } from "@/stores/branch";

const branchStore = useBranchStore();

const settings = ref(null);
const branchs = ref([]);

watch(
  () => branchStore.branchs,
  (newVal) => {
    if (Array.isArray(newVal) && newVal.length > 0) {
      branchs.value = newVal;
    }
  },
  { immediate: true, deep: true }
);

onMounted(async () => {
  try {
    const [settingsData] = await Promise.all([fetchSettingService()]);

    settings.value = settingsData;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
});

const combinedData = computed(() => {
  if (!settings.value || !branchs.value) return [];
  return branchs.value.flatMap((branch) =>
    (branch.cinemas || []).map((cinema) => ({
      text: `${settings.value.site_name} ${cinema.name}, ${branch.name}`,
    }))
  );
});

const formattedImage = (image) => {
  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "https://alphacinema.me/";
  return image ? `${baseUrl}${image}` : "";
};
</script>

<template>
  <div v-if="settings">
    <footer class="footer-section">
      <footer class="footer">
        <div class="container bottom_border">
          <div class="row footer-top">
            <div class="logo">
              <img v-if="settings.website_logo" width="150" class="logo-img" :alt="settings.site_name"
                :src="formattedImage(settings.website_logo)" />
              <ul class="footer_ul_amrc">
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/gioi-thieu">
                    Giới thiệu
                  </NuxtLink>
                </li>
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/dieu-khoan-dich-vu">
                    Điều khoản dịch vụ
                  </NuxtLink>
                </li>
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/policy">
                    Chính sách bảo mật
                  </NuxtLink>
                </li>
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/posts"> Tin tức </NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="headin5_amrc">Liên Hệ</h5>
              <p class="mb10">{{ settings.slogan }}</p>
              <p>
                <i class="bi bi-geo-alt-fill"></i> {{ settings.headquarters }}
              </p>
              <p><i class="bi bi-telephone-fill"></i> {{ settings.phone }}</p>
              <p><i class="bi bi-envelope-at-fill"></i> {{ settings.email }}</p>
            </div>

            <div>
              <h5 class="headin5_amrc">Các chi nhánh</h5>
              <ul class="footer_ul_amrc">
                <li v-for="(item, index) in combinedData" :key="index">
                  <i class="bi bi-dot"></i><a href="#">{{ item.text }}</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="headin5_amrc">Kết nối với chúng tôi</h5>
              <ul class="footer_ul2_amrc">
                <li>
                  <a href="#"><i class="bi bi-facebook"></i></a>
                  <p>
                    <a href="#">{{ settings.facebook_link }}</a>
                  </p>
                </li>
                <li>
                  <a href="#"><i class="bi bi-youtube"></i></a>
                  <p>
                    <a href="#">{{ settings.youtube_link }}</a>
                  </p>
                </li>
                <li>
                  <a href="#"><i class="bi bi-instagram"></i></a>
                  <p>
                    <a href="#">{{ settings.instagram_link }}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
          <p class="text-center">
            Copyright @2025 | Designed With by
            <a href="#">AphaCinema</a>
          </p>
        </div>
      </footer>
    </footer>
  </div>
</template>

<style scoped>
.footer-section {
  background-color: #121212;
}

.footer {
  background-color: #121212;
  color: #dfe4ea;
  padding: 50px 0 20px;
  font-size: 14px;
  line-height: 1.8;
}

/* ✅ Căn logo + tiêu đề cùng hàng */
.footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
}

.footer-top>div {
  flex: 1 1 240px;
  min-width: 220px;
}

/* ✅ Logo */
.logo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0;
  margin-top: 0;
}

.logo-img {
  max-width: 180px;
  height: auto;
  margin-bottom: 16px;
  border-radius: 12px;
}

/* ✅ Tiêu đề cột */
.headin5_amrc {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.footer p,
.footer li,
.footer a {
  color: #ced6e0;
}

.footer a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer a:hover {
  color: #f1c40f;
}

.footer_ul_amrc,
.footer_ul2_amrc,
.foote_bottom_ul_amrc,
.social_footer_ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer_ul_amrc li,
.footer_ul2_amrc li,
.social_footer_ul li {
  margin-bottom: 8px;
}

.footer_ul_amrc li i,
.footer_ul2_amrc li i {
  color: #f1c40f;
  margin-right: 8px;
}

.footer_ul2_amrc li a,
.footer_ul2_amrc li p {
  display: inline-block;
}

.social_footer_ul {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 12px;
  flex-wrap: wrap;
}

.social_footer_ul li a {
  border: 1px solid #ced6e0;
  color: #ced6e0;
  border-radius: 50%;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
}

.social_footer_ul li a:hover {
  border-color: #f1c40f;
  color: #f1c40f;
}

.bottom_border {
  border-bottom: 1px solid #3d3d3d;
  margin-bottom: 30px;
  padding-bottom: 20px;
}

.foote_bottom_ul_amrc {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}

.foote_bottom_ul_amrc li a {
  color: #a4b0be;
  font-size: 13px;
}

.foote_bottom_ul_amrc li a:hover {
  color: #f1c40f;
}

.text-center {
  text-align: center;
  color: #7f8c8d;
  margin-top: 10px;
}
</style>
