<template>
  <div class="container text-center space-y-6">
    <pre class="bg-white py-2 px-4 rounded-lg inline-block">yarn add nuxt-swiper</pre>
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="10"
      :scrollbar="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '768': {
          //slidesPerView: 4,
          //slidesPerGroup: 4,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "assets/css/plugins/swiper.css";

// import required modules
import { Scrollbar, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Scrollbar, Navigation, Pagination],
    };
  },
};
</script>

<style scoped>
  .swiper-slide {
    @apply h-[400px] bg-indigo-600;
  }
</style>