<template>
  <div class="space-y-6">
    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-bold">Native</h2>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/price-calculator" exact>Price calculator</a>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/multi-step-forms">Multi-step form</a>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/offcanvas">Off-canvas</a>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/drawer">Drawer</a>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/modal">Modal</a>
    </div>

    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-bold">Plugins</h2>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/code-input">Code input</a>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/swiper">Swiper</a>
    </div>

    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-bold">Framework</h2>
      <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/uikit">UiKit 3</a>
    </div>
  </div>
</template>

<style scoped>
  .nav-active {
    @apply bg-indigo-500 text-white;
  }
</style>