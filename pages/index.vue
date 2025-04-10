<template>
  <div>
    <!-- ==========Banner-Section========== -->
    <LayoutBanner />

    <div class="mt-5 home-section">
      <ClientOnly>
        <a-modal
          :open="openModal"
          width="1000px"
          centered
          @cancel="handleCancel"
          :footer="null"
        >
          <div>
            <div class="row p-3">
              <div class="col-lg-6 col-md-6">
                <div class="mb-3 text-center">
                  <label class="form-label">Tỉnh/Thành Phố</label>
                  <a-select
                    :value="valueBranch"
                    show-search
                    placeholder="Chọn Tỉnh/Thành phố"
                    style="width: 100%"
                    :options="optionBranch"
                    :filter-option="filterOptionBranch"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @change="handleChangeBranch"
                  ></a-select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="mb-3 text-center">
                  <label class="form-label">Tên rạp</label>
                  <a-select
                    :value="valueCinema"
                    show-search
                    placeholder="Chọn rạp chiếu"
                    style="width: 100%"
                    :options="optionCinema"
                    :filter-option="filterOptionCinema"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @change="handleChangeCinema"
                  ></a-select>
                </div>
              </div>
            </div>
          </div>
        </a-modal>
      </ClientOnly>

      <ClientOnly>
        <a-modal
          :open="openModalVerifyEmail"
          width="1000px"
          centered
          @cancel="handleCancelVerifyEmail"
          :footer="null"
        >
          <div class="d-flex justify-content-center align-items-center">
            <a-card :bordered="false" style="width: 300px">
              <div>
                <div>
                  <h6 class="text-center fw-bold">Vui lòng kiểm tra email</h6>
                </div>
                <div style="padding: 3rem 0">
                  <ClientOnly>
                    <PrimeInputOtp
                      v-model="form.otp"
                      :length="6"
                      class="justify-content-center"
                    />
                  </ClientOnly>
                </div>

                <div class="text-center">
                  <a-button type="primary" @click="handleSubmitVerifyEmail"
                    >Gửi</a-button
                  >
                </div>
              </div>
            </a-card>
          </div>
        </a-modal>
      </ClientOnly>

      <div class="container">
        <ClientOnly>
          <a-tabs v-model="tabActive" :default-active-key="'2'">
            <a-tab-pane key="1" tab="Phim Sắp Chiếu">
              <!-- <MovieList :movies="[]" /> -->
              <MovieList :movies="movieIsUpcoming" :btnBuy="false" />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Phim Đang Chiếu">
              <!-- <MovieList :movies="movieStore.movies?.data || []" /> -->
              <MovieList :movies="movieIsShowing || []" :btnBuy="true" />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Suất Chiếu Đặc Biệt">
              <MovieList :movies="movieIsSpecial" :btnBuy="true" />
              <!-- <MovieList :movies="[]" /> -->
            </a-tab-pane>
          </a-tabs>
        </ClientOnly>
      </div>

      <!-- <div class="container">
        <div
          class="d-flex justify-content-center align-content-center align-items-center h-screen"
        >
          <a-spin />
        </div>
      </div> -->
    </div>
    <!-- ==========Movie-Section========== -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "admin",
});

const form = ref({
  otp: "",
});

const handleSubmitVerifyEmail = async () => {
  try {
    console.log(form.value.otp);
    const data = {
      email: authStore.user.email,
      otp: form.value.otp,
    };
    authStore.confirmEmail(data);
  } catch (error) {
    console.log(error);
  }
};

watch(
  () => form.otp,
  (val) => {
    if (val.length == 6) {
      // verifyEmailService();

      console.log("1111");
    }
  }
);

const handleVerifyOtp = async () => {
  try {
    const response = await authStore.verifyOtp(form.otp);
  } catch (error) {
    console.log(error);
  }
};

import { LayoutBanner, MovieList } from "#components";
import { useMovieStore } from "~/stores/movie";
import { useBranchStore } from "~/stores/branch";
import { useAuthStore } from "~/stores/auth";

const movieStore = useMovieStore();
const branchStore = useBranchStore();
const authStore = useAuthStore();

const tabActive = ref("2");
const openModal = ref(false);
const openModalVerifyEmail = ref(false);

const selectCinemaBranch = useCookie("selectCinemaBranch", {
  maxAge: 60 * 60 * 24,
});

/** data select city*/

const optionBranch = ref([]);
const optionCinema = ref([]);

const handleChangeBranch = (value) => {
  console.log(`Branch select: ${value}`);
  valueBranch.value = value;

  if (value) {
    valueCinema.value = undefined;
    optionCinema.value = branchStore.convertOptionCinema(value);
    return;
  }

  optionCinema.value = [];
  valueCinema.value = undefined;
};

const handleChangeCinema = (value) => {
  valueCinema.value = value;

  const result = {
    branch_id: valueBranch.value,
    cinema_id: valueCinema.value,
  };

  selectCinemaBranch.value = result;
  openModal.value = false;

  console.log(result);
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const filterOptionBranch = (input, option) => {
  // console.log(input);
  console.log(option.label);

  // return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const filterOptionCinema = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const valueBranch = ref(undefined);
const valueCinema = ref(undefined);

const value = ref(undefined);

const handleCancel = () => {
  if (valueBranch.value && valueCinema.value) {
    openModal.value = false;
  }
};

const handleCancelVerifyEmail = () => {};

// watch(selectCinemaBranch, fetchMovies, { deep: true });
watch(
  selectCinemaBranch,
  async (newData, oldData) => {
    if (newData) {
      console.log("new data");
      await movieStore.fetchMovies(newData.branch_id, newData.cinema_id);
    }
  },
  { deep: true }
);

// watch(
//   () => authStore.user,
//   (user) => {
//     if (user && user.email_verified_at && user?.email_verified_at === null) {
//       openModalVerifyEmail.value = true;
//     }
//   },
//   { immediate: true, deep: true }
// );

// watch(
//   () => authStore.user,
//   (user) => {
//     const isNeedVerify =
//       user &&
//       (!("email_verified_at" in user) || user.email_verified_at === null);
//     if (isNeedVerify) {
//       openModalVerifyEmail.value = true;
//     }
//   },
//   { immediate: true, deep: true }
// );

watch(
  () => authStore.user,
  (user) => {
    const hasUserData = user && Object.keys(user).length > 0;
    const isEmailUnverified = user?.email_verified_at == null;

    if (hasUserData && isEmailUnverified) {
      openModalVerifyEmail.value = true;
    }
  },
  { immediate: true, deep: true }
);

/**
 * Data 3 tab
 */

const nowVN = new Date(
  new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date())
);

/**
 * phim sắp chiếu
 */
const movieIsUpcoming = computed(() => {
  return (
    movieStore.movies?.data?.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      const createdAt = new Date(movie.created_at);
      // return releaseDate > nowVN && createdAt < nowVN;
      return releaseDate > nowVN && createdAt <= nowVN && movie.is_special != 1;
    }) || []
  );
});

/**
 * Phim đang chiếu
 */
const movieIsShowing = computed(() => {
  return (
    movieStore.movies?.data?.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      const endDate = new Date(movie.end_date);

      return releaseDate <= nowVN && nowVN <= endDate;
      // return nowVN <= endDate;
    }) || []
  );
});

/**
 * Xuất chiếu đặc biệt
 */
const movieIsSpecial = computed(() => {
  return (
    movieStore.movies?.data?.filter((movie) => {
      const createdAt = new Date(movie.created_at);
      const releaseDate = new Date(movie.release_date);

      // Nếu check xuất chiếu theo cách ban đầu
      // return createdAt <= nowVN && nowVN <= releaseDate;

      // Nếu check xuất chiếu đặc biệt bằng is_special
      // return movie.is_special == 1;

      // trường hợp thứ 3
      return (
        nowVN < releaseDate &&
        createdAt <= nowVN &&
        createdAt < releaseDate &&
        movie.is_special == 1
      );
    }) || []
  );
});

onMounted(async () => {
  movieStore.fetchMovies(
    selectCinemaBranch.value?.branch_id,
    selectCinemaBranch.value?.cinema_id
  );

  // authStore.verifyEmail(authStore.user.email);

  // if (!dataSelectCity.value) {
  //   openModal.value = true;
  // }

  if (selectCinemaBranch.value) {
    openModal.value = false;
    console.log(selectCinemaBranch.value);
    return;
  }

  openModal.value = true;
  await branchStore.listBranch();
  optionBranch.value = branchStore.convertOptionBranch();
  // console.log("Auth Google:", authGoogle.value);
});

useSeoMeta({
  title: "Alpha Cinema",
  description: "Website cinema ticket booking",
});
</script>

<style>
.home-section .ant-tabs-nav-wrap {
  display: flex;
  justify-content: center;
}

.home-section .ant-tabs-tab-btn {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
