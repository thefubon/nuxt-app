<template>
  <div class="space-y-16 container">
    <h1 class="text-4xl font-bold mb-4">Nuxt3 / Vue3 / Tailwind CSS</h1>
    <a class="text-default hover:text-blue-600 font-bold" href="https://github.com/thefubon/nuxt-app" target="_blank">Open GitHub</a>

    <TheNavbar/>

    <div class="mt-16 container space-x-4">
      <NuxtLink to="http://thefubon.com" target="_blank">&copy; 2022 Fubon - Website Design & Frontend Development</NuxtLink>
      <NuxtLink to="/test" target="_blank">(Test)</NuxtLink>
    </div>

  </div>
</template>

<script>
definePageMeta({
  layout: "empty",
});
</script>