<template>
  <HomeSlideShow :slides="slides" />
</template>

<script setup>
/**
 * Docs: `https://vue3-carousel.ismail9k.com/components/navigation.html`
 */
const slides = [
  {
    image:
      "https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/nha-gia-tien.jpg",
  },
  {
    image:
      "https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/rider.jpg",
  },
  {
    image:
      "https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/1215x365_2_.jpg",
  },
];
</script>
