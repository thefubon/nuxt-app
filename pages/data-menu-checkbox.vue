<template>
  <nav class="hidden lg:flex items-center space-x-8 text-lg font-bold">
    <NuxtLink v-for="(link, index) in links" :key="index" :to="link.url">
      {{ link.name }}


      {{ link.boxtest ? 1 : '' }}

      <input type="checkbox" v-model="link.boxtest"/>

    </NuxtLink>
  </nav>
</template>

<script setup>
  const links = reactive([
    {name: "Меню", url: "/", boxtest: true},
    {name: "Меню", url: "/menu", boxtest: false},
    {name: "Меню", url: "/menu", boxtest: false},
    {name: "Меню", url: "/menu", boxtest: false},
  ])
</script>

<style scoped>
  nav a {
    @apply text-zinc-500;
  }

  nav a.router-link-active {
    @apply text-default;
  }
</style>