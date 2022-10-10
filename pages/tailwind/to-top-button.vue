<template>
  <div>

    <!-- Just some dummy content to make the page longer -->
    <main>
        <section class="w-full h-96 flex justify-center items-center">
            <h1 class="text-4xl">Welcome</h1>
        </section>
        <section class="w-full h-96 bg-green-200 flex justify-center items-center">
            <h1 class="text-4xl">Just Some Dummy Content</h1>
        </section>
        <section class="w-full h-96 bg-sky-200 flex justify-center items-center">
            <h1 class="text-4xl">Just Some Dummy Content</h1>
        </section>
        <section class="w-full h-96 bg-amber-200 flex justify-center items-center">
            <h1 class="text-4xl">Just Some Dummy Content</h1>
        </section>
        <section class="w-full h-96 bg-purple-200 flex justify-center items-center">
            <h1 class="text-4xl">Just Some Dummy Content</h1>
        </section>
    </main>

    <!-- Implement the Back Top Top Button -->
    <button id="to-top-button" onclick="goToTop()" title="Go To Top" class="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;</button>

  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/to-top-button.js',
        body: true
      },
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - To Top Button` : 'To Top Button';
    }
  })
  
</script>