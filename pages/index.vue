<template>
  <div class="space-y-4">
    
    <TheHero class="md-10 md:mb-10"/>

    <TheNavbar/>

    <div class="py-4 text-sm flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <select class="dark:text-black focus:ring-0 focus:outline-none border-none rounded" v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <div>
          &copy; 2022 <NuxtLink to="http://thefubon.com" target="_blank">Fubon</NuxtLink> - Website Design & Frontend Development
        </div>
      </div>

      <TheCounter/>
    </div>

  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});
</script>