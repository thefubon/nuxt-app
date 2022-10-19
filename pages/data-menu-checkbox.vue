<template>
  <div>

    <nav class="hidden lg:flex items-center space-x-8 text-lg font-bold mb-10">
      <NuxtLink class="space-x-4" v-for="(link, index) in links" :key="index" :to="link.url">
        {{ link.name }}
        {{ link.boxtest ? '(true)' : '(false)' }}
        <input type="checkbox" v-model="link.boxtest"/>

      </NuxtLink>
    </nav>

    <code><pre class="bg-white p-4 rounded-lg">// shallowReactive or reactive
      
links = shallowReactive([
  {name: "Меню", url: "#", boxtest: true},
  {name: "Меню", url: "#", boxtest: true},
  {name: "Меню", url: "#", boxtest: false},
  {name: "Меню", url: "#", boxtest: false},
])</pre></code>
  </div>
</template>

<script setup>
  const links = shallowReactive([
    {name: "Меню", url: "#", boxtest: true},
    {name: "Меню", url: "#", boxtest: true},
    {name: "Меню", url: "#", boxtest: false},
    {name: "Меню", url: "#", boxtest: false},
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