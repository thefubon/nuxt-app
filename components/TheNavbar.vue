<template>
  <div class="flex flex-col space-y-4">
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/price-calculator" exact>Калькулятор цен</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/multi-step-forms">Мульти-степ форма</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/code-input">Input в виде кода</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/offcanvas">Off-canvas</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/drawer">Drawer</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/modal">Modal</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/carusel">Carusel</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/sticky">Sticky</a>
  </div>
</template>

<style scoped>
  .nav-active {
    @apply bg-indigo-500 text-white;
  }
</style>