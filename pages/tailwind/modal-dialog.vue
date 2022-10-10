<template>
  <div>

    <!-- This button is used to open the dialog -->
    <button id="open" class="px-5 py-2 bg-rose-500 hover:bg-rose-700 text-white cursor-pointer rounded-md">
      Show Dialog
    </button>

    <!-- Overlay element -->
    <div id="overlay" class="fixed hidden z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"></div>

    <!-- The dialog -->
    <div id="dialog"
        class="hidden fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg">
        <h1 class="text-2xl font-semibold">Dialog Title</h1>
        <div class="py-5 border-t border-b border-gray-300">
          <p>Welcome. Hope you will find something useful. Have a nice day and happy coding</p>
        </div>
        <div class="flex justify-end">
          <!-- This button is used to close the dialog -->
          <button id="close" class="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md">Close</button>
        </div>
    </div>

  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/modal-dialog.js',
        body: true
      },
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Modal Dialog` : 'Modal Dialog';
    }
  })
  
</script>