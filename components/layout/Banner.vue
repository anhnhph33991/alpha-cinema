<template>
  <HomeSlideShow
    :slides="slideShowStore.slideshows"
    v-if="slideShowStore.slideshows"
  />
</template>

<script setup>
import { useSlideShowStore } from "~/stores/slideshow";
const slideShowStore = useSlideShowStore();

onMounted(() => {
  slideShowStore.fetchSlideShows();
});
</script>
