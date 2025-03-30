<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchSettingService } from "@/services/setting";
import { listBranchService } from "@/services/branch";

const config = useRuntimeConfig();
const settings = ref(null);
const branchs = ref([]); // Tránh lỗi khi dùng map()

onMounted(async () => {
  try {
    // Gọi API song song để lấy dữ liệu settings và branchs
    const [settingsData, branchsData] = await Promise.all([
      fetchSettingService(),
      listBranchService(),
    ]);

    settings.value = settingsData;
    branchs.value = branchsData?.data || []; // Đảm bảo tránh lỗi nếu API trả về undefined

    // console.log("settings.value", settings.value);
    // console.log("branchs.value", branchs.value);
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
});

// 🔥 Hiển thị dữ liệu theo format: `{setting.name} + {cinema.name} + {branch.name}`

const combinedData = computed(() => {
  if (!settings.value || !branchs.value) return [];

  return branchs.value.flatMap((branch) =>
    (branch.cinemas || []).map((cinema) => ({
      text: `${settings.value.site_name}  ${cinema.name}, ${branch.name}`,
    }))
  );
});

// Định dạng ảnh với base URL từ biến môi trường
const formattedImage = (image) => {

  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "https://alphacinema.me/";
  return image ? `${baseUrl}${image}` : "";

};
</script>

<template>
  <div v-if="settings">
    <footer class="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 logo">
            <img
              v-if="settings.website_logo"
              class="logo-img"
              :alt="settings.site_name"
              :src="formattedImage(settings.website_logo)"
            />
           
            <ul class="footer-links">
              <li><NuxtLink to="/site-setting/gioi-thieu">Giới thiệu</NuxtLink></li>
              <li><NuxtLink to="/site-setting/dieu-khoan-dich-vu">Điều khoản dịch vụ</NuxtLink></li>
              <li><NuxtLink to="/site-setting/policy">Chính sách bảo mật</NuxtLink></li>
              <li><NuxtLink to="/site-setting/posts">Tin tức</NuxtLink></li>
            </ul>
          </div>
          
          <div class="col-12 col-md-3 contact-info">
            <h5 class="section-title">Liên Hệ</h5>
            
            <p><i class="bi bi-geo-alt-fill"></i> {{ settings.headquarters }}</p>
            <p><i class="bi bi-telephone-fill"></i> {{ settings.phone }}</p>
            <p><i class="bi bi-envelope-at-fill"></i> {{ settings.email }}</p>
          </div>

          <div class="col-12 col-md-3 branches">
            <h5 class="section-title">Các chi nhánh</h5>
            <ul class="footer_ul_amrc">
                <li v-for="(item, index) in combinedData" :key="index">
                  <i class="bi bi-dot"></i><a href="#">{{ item.text }}</a>
                </li>
              </ul>
          </div>
          
          <div class="col-12 col-md-3 social-links">
            <h5 class="section-title">Kết nối với chúng tôi</h5>
            <div class="social-icons">
              <a :href="settings.facebook_link" target="_blank"><i class="bi bi-facebook"></i></a>
              <a :href="settings.youtube_link" target="_blank"><i class="bi bi-youtube"></i></a>
              <a :href="settings.instagram_link" target="_blank"><i class="bi bi-instagram"></i></a>
            </div>
            <p class="slogan">{{ settings.slogan }}</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom text-center">
        <p>Copyright &copy; 2025 | Designed by <a href="#">AlphaCinema</a></p>
      </div>
    </footer>
  </div>
</template>

<style>
.footer-section {
  background-color: #1a1d21;
  color: #ccc;
  padding: 40px 0;
}

.footer-links, .branches ul {
  list-style: none;
  padding: 0;
}
.footer-links li, .branches ul li {
  margin-bottom: 8px;
}
.footer-links a, .branches a, .social-links a {
  color: #ccc;
  transition: color 0.3s, text-decoration 0.3s;
  text-decoration: none;
}
/* .footer-links a:hover, .branches a:hover, .social-links a:hover {
  color: #6a5acd;
  text-decoration: underline;
} */

.contact-info p, .branches ul li {
  font-size: 16px;
  margin-bottom: 6px;
}

.logo-img {
  max-width: 200px;
  margin-bottom: 15px;
}
.slogan {
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(45deg, #20b2aa, #6a5acd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.social-icons a {
  margin-right: 10px;
  font-size: 50px;
  color: #ccc;
  transition: transform 0.3s, color 0.3s;
}
.social-icons a:hover, .footer-links a:hover, .branches a:hover, .social-links a:hover  {
  background: linear-gradient(45deg, #6a5acd, #20b2aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.1);
}

.footer-bottom {
  border-top: 1px solid #444;
  padding: 10px 0;
  font-size: 15px;
}

.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: linear-gradient(45deg, #6a5acd, #20b2aa);
  margin-top: 5px;
}
</style>
