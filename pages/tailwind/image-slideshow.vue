<template>
  <div>

    <!-- Implement the carousel -->
    <div class="relative w-[600px] mx-auto overflow-hidden">
        <div class="slide relative">
            <img class="w-full h-[300px] object-cover"
                src="/img/demo/flower-1.jpg">
            <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower One Caption</div>
        </div>

        <div class="slide relative">
            <img class="w-full h-[300px] object-cover"
                src="/img/demo/flower-2.jpg">
            <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Two Caption</div>
        </div>

        <div class="slide relative">
            <img class="w-full h-[300px] object-cover"
                src="/img/demo/flower-3.jpg">
            <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Three Caption
            </div>
        </div>

        <!-- The previous button -->
        <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(-1)">❮</a>

        <!-- The next button -->
        <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(1)">❯</a>

    </div>
    <br>

    <!-- The dots -->
    <div class="flex justify-center items-center space-x-5">
        <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(1)"></div>
        <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(2)"></div>
        <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(3)"></div>
    </div>

  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/image-slideshow.js',
        body: true
      }
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Image Slideshow` : 'Image Slideshow';
    }
  })
</script>