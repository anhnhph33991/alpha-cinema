<template>
  <div>
    <!-- ==========Banner-Section========== -->
    <!-- <AppBanner /> -->
    <!-- ==========Banner-Section========== -->

    <!-- ==========Ticket-Search========== -->
    <!-- <UiTicketSearch /> -->
    <!-- ==========Ticket-Search========== -->

    <!-- ==========Movie-Section========== -->
    <MovieList :movies="movieStore.movies?.data || []">
      <template #header>
        <div class="section-header-1">
          <h2 class="title">movies</h2>
          <NuxtLink class="view-more" :to="{ name: 'movies' }">
            View More
            <i class="fal fa-long-arrow-alt-right"></i>
          </NuxtLink>
        </div>
      </template>
    </MovieList>
    <!-- ==========Movie-Section========== -->
  </div>
</template>

<script setup>
import { useMovieStore } from "~/stores/movie";

const movieStore = useMovieStore();

onMounted(() => {
  movieStore.fetchMovies();
});
</script>
