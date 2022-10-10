<template>
  <div class="flex flex-wrap gap-4">

    <div id="dropdown-wrapper" class="inline-block">
        <button onclick="toggleMenu()" class="px-10 py-3 bg-amber-500 hover:bg-amber-600 focus:bg-rose-500 text-white">Dropdown Click</button>
        <div id="menu" class="hidden flex flex-col bg-white drop-shadow-md">
            <a class="px-5 py-3 hover:bg-amber-300 border-b border-gray-200" href="#">About</a>
            <a class="px-5 py-3 hover:bg-amber-300 border-b border-gray-200" href="#">Contact Us</a>
            <a class="px-5 py-3 hover:bg-amber-300 border-b border-gray-200" href="#">Privacy Policy</a>
            <a class="px-5 py-3 hover:bg-amber-300" href="#">Hello There</a>
        </div>
    </div>

    <div>
        <button class="peer px-10 py-3 bg-green-500 hover:bg-amber-600 focus:bg-rose-500 text-white">Dropdown Hover</button>
        
        <!-- the menu here -->
        <div class="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
            <a class="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
        </div>
    </div>

  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/dropdown.js',
        body: true
      },
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Dropdown` : 'Dropdown';
    }
  })
  
</script>