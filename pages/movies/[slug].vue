<template>
  <div v-if="movieStore.movie?.data">
    <MovieDetail
      :slug="slug"
      :movie="movieStore.movie?.data.movie"
      :showtime="movieStore.movie?.data.showtimes"
    />
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
</script>
