<template>
  <div v-if="movieStore.movie?.data">
    <!-- <h1>Movie: {{ slug }}</h1> -->
    <MovieDetail
      :slug="slug"
      :movie="movieStore.movie?.data.movie"
      :showtime="movieStore.movie?.data.showtimes"
    />
  </div>
  <div v-else>Loading...</div>
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
