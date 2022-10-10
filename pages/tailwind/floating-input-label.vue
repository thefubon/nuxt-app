<template>
  <div>

    <form class="space-y-5">
        <div class="flex flex-col items-start">
            <input type="text" id="username" placeholder="John Doe" class="peer px-4 py-2 w-96 
            border border-slate-600 placeholder-transparent" />
            <label for="username" class="ml-4 -mt-11 text-xs text-blue-600  
            peer-placeholder-shown:text-gray-400 
            peer-placeholder-shown:-mt-8
            peer-placeholder-shown:text-base 
            duration-300">
                username
            </label>
        </div>
    </form>

  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Floating Input Label` : 'Floating Input Label';
    }
  })
  
</script>