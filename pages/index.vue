<template>
  <div class="space-y-4">
    
    <TheHero class="md-10 md:mb-10"/>

    <TheNavbar/>

    <div class="space-x-4 py-4 text-sm">
      &copy; 2022 <NuxtLink to="http://thefubon.com" target="_blank">Fubon</NuxtLink> - Website Design & Frontend Development
    </div>

  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});
</script>