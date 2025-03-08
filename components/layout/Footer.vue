<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchSettingService } from "@/services/setting";
import { listBranchService } from "@/services/branch";

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
    import.meta.env.VITE_API_BASE_URL || "https://alphacinema.test/";
  return image ? `${baseUrl}${image}` : "";
};
</script>

<template>
  <div v-if="settings">
    <footer class="footer-section">
      <footer class="footer">
        <div class="container bottom_border">
          <div class="row">
            <div class="col-12 col-md-3 logo">
              <img
                v-if="settings.website_logo"
                class="logo-img border-radius-20"
                :alt="settings.site_name"
                :src="formattedImage(settings.website_logo)"
              />
              <!--headin5_amrc-->
              <ul class="footer_ul_amrc">
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/gioi-thieu"> Giới thiệu</NuxtLink>
                </li>
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/dieu-khoan-dich-vu">
                    Điều khoản dịch vụ</NuxtLink
                  >
                </li>
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/policy">
                    Chính sách bảo mật</NuxtLink
                  >
                </li>
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/posts"> Tin tức</NuxtLink>
                </li>
              </ul>
              <!--footer_ul_amrc ends here-->
            </div>
            <div class="col-12 col-md-3">
              <h5 class="headin5_amrc col_white_amrc pt2">Liên Hệ</h5>

              <!--headin5_amrc-->
              <p class="mb10">
                {{ settings.slogan }}
              </p>
              <p>
                <i class="bi bi-geo-alt-fill"></i> {{ settings.headquarters }}
              </p>
              <p><i class="bi bi-telephone-fill"></i> {{ settings.phone }}</p>
              <p><i class="bi bi-envelope-at-fill"></i> {{ settings.email }}</p>
            </div>
            <div class="col-12 col-md-3">
              <h5 class="headin5_amrc col_white_amrc pt2">Các chi nhánh</h5>
              <!--headin5_amrc-->
              <ul class="footer_ul_amrc">
                <li v-for="(item, index) in combinedData" :key="index">
                  <i class="bi bi-dot"></i><a href="#">{{ item.text }}</a>
                </li>
              </ul>
              <!--footer_ul_amrc ends here-->
            </div>

            <div class="col-12 col-md-3">
              <h5 class="headin5_amrc col_white_amrc pt2">
                Kết nối với chúng tôi
              </h5>
              <!--headin5_amrc ends here-->

              <ul class="footer_ul2_amrc">
                <li>
                  <a href="#"
                    ><i class="bi bi-facebook fleft padding-right mt-0"></i>
                  </a>
                  <p>
                    <a href="#">{{ settings.facebook_link }}</a>
                  </p>
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-youtube fleft padding-right mt-0"></i>
                  </a>
                  <p>
                    <a href="#">{{ settings.youtube_link }}</a>
                  </p>
                </li>
                <li>
                  <a href="#"
                    ><i class="bi bi-instagram fleft padding-right mt-0"></i>
                  </a>
                  <p>
                    <a href="#">{{ settings.instagram_link }}</a>
                  </p>
                </li>
              </ul>
              <!--footer_ul2_amrc ends here-->
            </div>
          </div>
        </div>

        <div class="container">
          <ul class="foote_bottom_ul_amrc">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <!--foote_bottom_ul_amrc ends here-->
          <p class="text-center">
            Copyright @2025 | Designed With by <a href="#">AphaCinema</a>
          </p>

          <ul class="social_footer_ul">
            <li>
              <a href=""><i class="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-youtube"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-instagram"></i></a>
            </li>
          </ul>
          <!--social_footer_ul ends here-->
        </div>
      </footer>
    </footer>
  </div>
</template>
<style>
/* Footer */
/*footer*/
.logo {
  filter: drop-shadow(3px 3px 5px rgba(192, 163, 163, 0.5));
}
    
.col_white_amrc {
  color: #fff;
}
footer {
  /* width: 100%; */
  background-color: #263238;
  min-height: 250px;
  padding: 10px 0px 25px 0px;
}
.pt2 {
  padding-top: 40px;
  margin-bottom: 20px;
}
footer p {
  font-size: 13px;
  color: #ccc;
  padding-bottom: 0px;
  margin-bottom: 8px;
}
.mb10 {
  font-size: 20px;
}
.footer_ul_amrc {
  margin: 0px;
  list-style-type: none;
  font-size: 14px;
  padding: 0px 0px 10px 0px;
}
.footer_ul_amrc li {
  padding: 0px 0px 5px 0px;
  color: #ccc;
}
.footer_ul_amrc li a {
  color: #ccc;
}
.footer_ul_amrc li a:hover {
  color: #fff;
  text-decoration: none;
}
.fleft {
  float: left;
}
.padding-right {
  padding-right: 10px;
}

.footer_ul2_amrc {
  margin: 0px;
  list-style-type: none;
  padding: 0px;
}
.footer_ul2_amrc li p {
  display: table;
}
.footer_ul2_amrc li a:hover {
  text-decoration: none;
}
.footer_ul2_amrc li i {
  margin-top: 5px;
}

.bottom_border {
  border-bottom: 1px solid #323f45;
  padding-bottom: 20px;
  /* max-width: 80%; */
}
.foote_bottom_ul_amrc {
  list-style-type: none;
  padding: 0px;
  display: table;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
}
.foote_bottom_ul_amrc li {
  display: inline;
}
.foote_bottom_ul_amrc li a {
  color: #999;
  margin: 0 12px;
}

.social_footer_ul {
  display: table;
  margin: 15px auto 0 auto;
  list-style-type: none;
}
.social_footer_ul li {
  padding-left: 20px;
  padding-top: 10px;
  float: left;
}
.social_footer_ul li a {
  color: #ccc;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 50%;
}
.social_footer_ul li i {
  width: 20px;
  height: 20px;
  text-align: center;
}

.footer a {
  text-decoration: none !important;
}

.footer a:hover {
  text-decoration: none !important;
  color: #fff;
}
.logo-img {
  max-width: 220px;
  height: auto;
}
</style>
