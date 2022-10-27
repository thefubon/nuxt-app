<template>
  <main class="">
    <div data-uk-slider="finite:true; sets:true">
      <div class="group relative">
        <div class="overflow-hidden">
          <ul class="uk-slider-items !-mr-4">
            <li class="flex w-full items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/4" v-for="index in 10" :key="index">
              <div class="mr-4 flex h-40 w-full items-center justify-center bg-slate-400">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">{{ index }}</div>
              </div>
            </li>
          </ul>
        </div>
        <a class="absolute inset-y-0 -left-4 flex items-center justify-center" href="#" data-uk-slider-item="previous">
          <Icon class="h-8 w-8 rounded-full bg-white opacity-50 shadow-lg duration-300 group-hover:opacity-100" name="ic:round-keyboard-arrow-left" size="32" />
        </a>
        <a class="absolute inset-y-0 -right-4 flex items-center justify-center" href="#" data-uk-slider-item="next">
          <Icon class="h-8 w-8 rounded-full bg-white opacity-50 shadow-lg duration-300 group-hover:opacity-100" name="ic:round-keyboard-arrow-right" size="32" />
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Slider` : 'Slider';
    }
  })
</script>

<style scoped>

/* Visible
--------------------------------------- */
.uk-invisible {
  @apply !hidden;
}

/* Slider
--------------------------------------- */
.uk-slider {
  -webkit-tap-highlight-color: transparent;
}

.uk-slider-items {
  @apply will-change-transform relative touch-pan-y flex m-0 p-0 list-none flex-nowrap;
  -webkit-touch-callout: none;
}

.uk-slider-items > * {
  @apply flex-none max-w-full relative;
}
</style>
