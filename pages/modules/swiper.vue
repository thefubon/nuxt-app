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
      class="mySwiper overflow-hidden"
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
    },
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Swiper` : 'Swiper';
      }
    })
  },
};
</script>

<style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
     @apply h-[400px] bg-indigo-600;
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    width: 80%;
  }

  .swiper-slide:nth-child(2n) {
    width: 60%;
  }

  .swiper-slide:nth-child(3n) {
    width: 40%;
  }

  .swiper-slide:nth-child(4n) {
    width: 100%;
  }
</style>