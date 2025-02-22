<template>
  <section class="movie-section padding-top bg-two">
    <div class="container">
      <div class="row flex-wrap-reverse justify-content-center">
        <div class="col-lg-12">
          <div class="article-section padding-bottom">
            <slot name="header" />
            <div class="row mb-30-none">
              <div
                class="col-sm-6 col-lg-4"
                v-for="(item, index) in movies"
                :key="index"
              >
                <div class="movie-grid">
                  <div class="movie-thumb c-thumb">
                    <NuxtLink
                      :to="{
                        name: 'movies-slug',
                        params: { slug: 'luxchill-6789' },
                      }"
                    >
                      <img src="/theme/img/movie/movie-1.jpg" alt="movie" />
                    </NuxtLink>
                    <!-- <a href="#">
                      <img src="/theme/img/movie/movie-1.jpg" alt="movie" />
                    </a> -->
                  </div>
                  <div class="movie-content">
                    <h5 class="title m-0">
                      <NuxtLink
                        :to="{
                          name: 'movies-slug',
                          params: { slug: 'luxchill-6789' },
                        }"
                      >
                        Avatar Special Edition
                      </NuxtLink>
                      <!-- <a href="#">Avatar Special Edition</a> -->
                    </h5>

                    <ul class="movie-rating-percent">
                      <li>
                        <i class="fal fa-shopping-cart"></i>
                        <span class="content">88.8k</span>
                      </li>
                      <li>
                        <i class="fal fa-star"></i>
                        <span class="content">5.0</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  movies: {
    type: Number,
    required: true,
  },
});
</script>
