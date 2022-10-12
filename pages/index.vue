<template>
  <div class="space-y-4">
    
    <TheHero class="md-10 md:mb-10"/>

    <TheNavbar/>

    <div class="space-x-4 py-4 text-sm flex items-center">
      <select class="dark:text-black focus:ring-0 focus:outline-none border-none rounded" v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
     <div>
       &copy; 2022 <NuxtLink to="http://thefubon.com" target="_blank">Fubon</NuxtLink> - Website Design & Frontend Development
     </div>
    </div>

  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});
</script>