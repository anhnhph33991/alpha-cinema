<template>
    <div class="slideshow-container w-100">
        <Carousel :items-to-show="1" :wrap-around="true" :transition="500" :autoplay="5000" class="carousel-full-width">
            <Slide v-for="(slide, index) in slides" :key="index">
                <div class="slide-wrapper">
                    <img :src="slide" alt="Slide" />
                </div>
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
.al-slide-height-500 {
  height: 500px;
}
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
  /* height: auto; */
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
.al-slide-image {
    width: 100%;
    /* aspect-ratio: 16 / 9; */
    /* Tỷ lệ 16:9 */
    object-fit: cover;
    display: block;
}
.slide-wrapper {
    width: 100%;
    /* height: 50%; */
    /* aspect-ratio: 16 / 9; */
    overflow: hidden;
}

.slide-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
@media (max-width: 768px) {
    .al-slide-image {
        aspect-ratio: 4 / 3;
        /* Tỷ lệ khác cho thiết bị nhỏ hơn */
    }
}
@media (min-width: 768px) {
    .al-slide-image {
        height: 60vh;
    }
}

@media (min-width: 1024px) {
    .al-slide-image {
        height: 70vh;
    }
}
</style>
