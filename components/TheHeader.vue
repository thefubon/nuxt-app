<template>
  <header class="bg-white dark:bg-dark dark:text-white py-4">
    <nav class="container px-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold"><a class="flex flex-col md:flex-row md:items-center md:space-x-2 leading-tight md:leading-none" href="/"><span>Nuxt<sup>3</sup></span> <span class="hidden md:inline-block">|</span> <span class="text-sm font-normal md:text-2xl">Components Collection</span></a></h1>

      <div class="space-x-4">
        <select class="dark:text-black focus:ring-0 focus:outline-none border-none rounded" v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <a class="button button-primary button-sm !px-4 md:!px-6" href="https://github.com/thefubon/nuxt-app" target="_blank"><IconGitHub class="inline-block mr-2"/>GitHub</a>
      </div>
    </nav>
  </header>
</template>