<template>
  <HomeSlideShow :slides="propsSlides" />
</template>

<script setup>
import { useSlideShowStore } from "~/stores/slideshow";
const slideShowStore = useSlideShowStore();

const slides = [
  "https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/nha-gia-tien.jpg",
  "https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/rider.jpg",
  "https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/1215x365_2_.jpg",
];

const propsSlides = computed(() => {
  return slideShowStore.slideshows && slideShowStore.slideshows.length
    ? slideShowStore.slideshows
    : slides;
});

onMounted(() => {
  slideShowStore.fetchSlideShows();
});
</script>
