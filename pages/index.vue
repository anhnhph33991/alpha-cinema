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

      <div class="container">
        <ClientOnly>
          <a-tabs v-model="tabActive" :default-active-key="'2'">
            <a-tab-pane key="1" tab="Phim Sắp Chiếu">
              <MovieList
                :movies="movieStore.moviesComingSoon?.data || []"
                :btnBuy="false"
              />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Phim Đang Chiếu">
              <MovieList
                :movies="movieStore.moviesNowShowing?.data || []"
                :btnBuy="true"
              />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Suất Chiếu Đặc Biệt">
              <MovieTabSpecial
                :movies="movieStore.moviesSpecial?.data || []"
                :btnBuy="true"
              />
            </a-tab-pane>
          </a-tabs>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "admin",
});

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

watch(
  selectCinemaBranch,
  async (newData, oldData) => {
    if (newData) {
      fetchAllMovies(newData.branch_id, newData.cinema_id);
    }
  },
  { deep: true }
);

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

function fetchAllMovies(branchId = null, cinemaId = null) {
  return Promise.all([
    movieStore.fetchMoviesComingSoon(branchId, cinemaId),
    movieStore.fetchMoviesNowShowing(branchId, cinemaId),
    movieStore.fetchMoviesSpecial(branchId, cinemaId),
  ]);
}

onMounted(async () => {
  fetchAllMovies(
    selectCinemaBranch.value?.branch_id,
    selectCinemaBranch.value?.cinema_id
  );

  // movieStore.fetchMoviesComingSoon(
  //   selectCinemaBranch.value?.branch_id,
  //   selectCinemaBranch.value?.cinema_id
  // );
  // movieStore.fetchMoviesNowShowing(
  //   selectCinemaBranch.value?.branch_id,
  //   selectCinemaBranch.value?.cinema_id
  // );
  // movieStore.fetchMoviesSpecial(
  //   selectCinemaBranch.value?.branch_id,
  //   selectCinemaBranch.value?.cinema_id
  // );

  if (selectCinemaBranch.value) {
    openModal.value = false;
    console.log(selectCinemaBranch.value);
    return;
  }

  openModal.value = true;
  await branchStore.listBranch();
  optionBranch.value = branchStore.convertOptionBranch();
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
