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
const slug = route.params.slug;

onMounted(() => {
  movieStore.fetchMovie(slug);
});
</script>

<style lang="scss" scoped></style>
