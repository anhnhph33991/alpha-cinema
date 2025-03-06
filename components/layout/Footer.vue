<script setup>
import { ref, onMounted } from "vue";
import { fetchSettingService } from "@/services/setting"; // Import service

const settings = ref(null);

onMounted(async () => {
  try {
    settings.value = await fetchSettingService();
    console.log("settings.value", settings.value);
  } catch (error) {
    console.error("Không thể tải dữ liệu từ Backend:", error);
  }
});
const formattedImage = (image) => {
  return image ? `https://alphacinema.test/${image}` : "";
};
</script>
<template>
  <div v-if="settings">
    <footer class="footer-section">
      <footer class="footer">
        <div class="container bottom_border">
          <div class="row">
            <div class="col-sm-4 col-md col-6 col">
              <img
                v-if="settings.website_logo"
                class="logo-img border-radius-20"
                :alt="settings.name"
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
                  <NuxtLink to="/site-setting/chinh-sach-bao-mat">
                    Chính sách bảo mật</NuxtLink
                  >
                </li>
                <li>
                  <i class="bi bi-caret-right-fill"></i>
                  <NuxtLink to="/site-setting/tin-tuc"> Tin tức</NuxtLink>
                </li>
              </ul>
              <!--footer_ul_amrc ends here-->
            </div>
            <div class="col-sm-4 col-md col-sm-4 col-12 col">
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
            <div class="col-sm-4 col-md col-6 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Các chi nhánh</h5>
              <!--headin5_amrc-->
              <ul class="footer_ul_amrc">
                <li><a href="">Remove Background</a></li>
              </ul>
              <!--footer_ul_amrc ends here-->
            </div>

            <div class="col-sm-4 col-md col-12 col">
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
.col_white_amrc {
  color: #fff;
}
footer {
  width: 100%;
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
  max-width: 200px;
  height: auto;
}
</style>
