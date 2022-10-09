<script setup>
  // "nuxt-swiper" auto imports modules automatically from `Swiper` itself 
  // eg. `prefix` Swiper<ModuleName> -> `SwiperPagination` is imported as `Pagination`
  const modules = [SwiperPagination, SwiperScrollbar, SwiperNavigation, SwiperPagination]

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Swiper` : 'Swiper';
    }
  })
</script>

<template>
  <div class="text-center space-y-6">
    <pre class="bg-white py-2 px-4 rounded-lg inline-block">yarn add nuxt-swiper</pre>
    <a class="button button-primary button-sm py-2 px-4 rounded-lg !rounded-l-none inline-block" href="https://github.com/cpreston321/nuxt-swiper#usage" target="_blank">Docs</a>

    <!-- Auto Imported Components from `nuxt-swiper` = "<Swiper/> & <SwiperSlide/>" -->
    <Swiper
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
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    @apply flex justify-center items-center h-[400px] bg-indigo-600;
    text-align: center;
    font-size: 18px;
    background: #fff;
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
