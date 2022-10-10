<template>
  <div>

    <!-- Image gird -->
    <div class="p-20 grid grid-cols-4 gap-5">
      <img class="w-full h-full object-cover cursor-pointer" src="/assets/images/flower-1.jpg" alt="Flower" onclick="showModal('/assets/images/flower-1.jpg')" />
      <img class="w-full h-full object-cover cursor-pointer" src="/assets/images/flower-2.jpg" alt="Flower" onclick="showModal('/assets/images/flower-2.jpg')" />
      <img class="w-full h-full object-cover cursor-pointer" src="/assets/images/flower-3.jpg" alt="Flower" onclick="showModal('/assets/images/flower-3.jpg')" />
      <img class="w-full h-full object-cover cursor-pointer" src="/assets/images/flower-4.jpg" alt="Flower" onclick="showModal('/assets/images/flower-4.jpg')" />
    </div>

    <!-- The Modal -->
    <div id="modal" class="hidden fixed top-0 left-0 z-40 w-screen h-screen bg-black/70 flex justify-center items-center">

        <!-- The close button -->
        <a class="fixed z-90 top-6 right-8 text-white text-5xl font-bold" href="javascript:void(0)" onclick="closeModal()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>

        <!-- A big image will be displayed here -->
        <img id="modal-img" class="max-w-[800px] max-h-[600px] object-cover" />
    </div>

  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/modal.js',
        body: true
      }
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Modal Images` : 'Modal Images';
    }
  })
  
</script>