<template>
  <div v-if="movieStore.movie?.data" class="h-screen">
    <div class="container">
      <ClientOnly>
        <a-page-header style="border: 1px solid rgb(235, 237, 240)">
          <template #breadcrumb>
            <a-breadcrumb>
              <a-breadcrumb-item
                v-for="(route, index) in breadcrumbRoutes"
                :key="index"
              >
                <NuxtLink
                  v-if="index !== breadcrumbRoutes.length - 1"
                  :to="route.path"
                >
                  {{ route.breadcrumbName }}
                </NuxtLink>
                <span v-else>
                  {{ route.breadcrumbName }}
                </span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </template>
        </a-page-header>
      </ClientOnly>
    </div>

    <MovieDetail :slug="slug" :movie="movieStore.movie?.data.movie" />
  </div>
  <div v-else class="d-flex justify-content-center align-items-center h-screen">
    <div>
      <a-spin />
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "~/stores/movie";

const movieStore = useMovieStore();
const route = useRoute();
const slug = computed(() => route.params.slug);
const selectCinemaBranch = useCookie("selectCinemaBranch");

const breadcrumbRoutes = computed(() => [
  {
    path: "/",
    breadcrumbName: "Trang chủ",
  },
  {
    path: "name",
    breadcrumbName: `${movieStore.movie?.data?.movie?.name || "Loading..."}`,
  },
]);

const loadMovie = () => {
  if (
    !movieStore.movie?.data ||
    slug.value !== movieStore.movie.data.movie?.slug
  ) {
    movieStore.movie = null;
    movieStore.fetchMovie(
      slug.value,
      selectCinemaBranch.value?.branch_id,
      selectCinemaBranch.value?.cinema_id
    );
  }
};

watch(slug, loadMovie, { immediate: true });

watch(
  selectCinemaBranch,
  async (newData, oldData) => {
    if (newData) {
      movieStore.fetchMovie(slug.value, newData.branch_id, newData.cinema_id);
    }
  },
  { deep: true }
);
</script>
