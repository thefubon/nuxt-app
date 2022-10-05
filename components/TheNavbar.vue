<template>
  <div class="flex flex-col space-y-4">
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/price-calculator" exact>Калькулятор цены</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/multi-step-forms">Мульти-степ форма</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/code-input">Input в виде кода</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/offcanvas">Offcanvas</a>
    <a class="text-primary-600 hover:text-primary-300 inline-block bg-white text-center rounded p-2" active-class="nav-active" href="/drawer">Drawer</a>
  </div>
</template>

<style scoped>
  .nav-active {
    @apply bg-indigo-500 text-white;
  }
</style>