<template>
  <div class="slideshow-container w-100">
    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      :transition="500"
      :autoplay="5000"
      class="carousel-full-width"
    >
      <Slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" alt="Slide" class="img-fluid w-100" />
      </Slide>

      <template #addons>
        <CarouselNavigation>
          <template #prev>
            <span class="al-slide-pagination">←</span>
          </template>
          <template #next>
            <span class="al-slide-pagination">→</span>
          </template>
        </CarouselNavigation>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
/**
 * Docs: `https://vue3-carousel.ismail9k.com/components/navigation.html`
 */
import {
  Carousel,
  Slide,
  Pagination,
  Navigation as CarouselNavigation,
} from "vue3-carousel";

defineProps({
  slides: {
    required: true,
  },
});
</script>

<style scoped>
.al-slide-pagination {
  color: #fff;
}
.slideshow-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-full-width {
  width: 100%;
}

.img-fluid {
  height: auto;
  object-fit: cover;
}

.carousel__next,
.carousel__prev {
  align-items: center;
  background: var(--vc-nav-background);
  border: 0;
  border-radius: var(--vc-nav-border-radius);
  box-sizing: content-box;
  color: var(--vc-nav-color);
  cursor: pointer;
  display: flex;
  font-size: var(--vc-nav-height);
  height: var(--vc-nav-height);
  justify-content: center;
  margin: 0 10px;
  padding: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  width: var(--vc-nav-width);
  color: white;
}
</style>
