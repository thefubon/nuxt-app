<template>
  <div>

    <div class="relative w-full flex justify-start items-center bg-indigo-600 text-white drop-shadow-md">
        <!-- Logo -->
        <div class="px-3 md:px-10 text-2xl text-white font-extrabold italic">
            Nuxt<sup>3</sup> <span class="text-amber-400">Code</span>
        </div>

        <a href="#" class="px-5 py-4 hover:bg-amber-200 hover:text-black">Home</a>
        <a href="#" class="px-5 py-4 hover:bg-amber-200 hover:text-black">Contact</a>

        <!-- Mega menu here -->
        <div class="group">
            <button class="px-5 py-4 group-hover:bg-amber-200 group-hover:text-black">Dropdown
                &darr;
            </button>
            <div
                class="hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-amber-200 text-black duration-300">
                <div class="pb-5">
                    <h2 class="text-3xl">Mega Menu</h2>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Category 1</h3>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 1</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 2</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 3</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 4</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 5</a>
                    </div>

                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Category 2</h3>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 1</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 2</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 3</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 4</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 5</a>
                    </div>

                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Category 3</h3>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 1</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 2</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 3</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 4</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 5</a>
                    </div>

                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Category 4</h3>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 1</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 2</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 3</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 4</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 5</a>
                    </div>

                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Category 5</h3>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 1</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 2</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 3</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 4</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 5</a>
                    </div>

                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Category 6</h3>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 1</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 2</a>
                        <a href="#" class="hover:underline hover:text-red-600">Sample Link 3</a>
                    </div>
                </div>
            </div>
        </div> <!-- end of dropdown -->

    </div>

  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Mega Menu` : 'Mega Menu';
    }
  })
  
</script>