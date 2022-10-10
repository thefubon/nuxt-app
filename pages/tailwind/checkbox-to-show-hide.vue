<template>
  <div>
  
    <form class="space-y-5">
        <h1 class="text-2xl text-gray-600 italic">Example</h1>
        <div>
            <input type="checkbox" name="agree" id="agree" class="peer" />
            <label for="agree" class="ml-3">To continue, you must agree to
              <a href="#" class="text-blue-500 underline">the Terms and Conditions</a>
            </label>

            <div class="mt-10 invisible peer-checked:visible">
              <button type="submit" class="w-96 px-5 py-2 bg-amber-400 hover:bg-amber-600 rounded-md">Continue</button>
            </div>
        </div>
    </form>

  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Checkbox to Show/Hide` : 'Checkbox to Show/Hide';
    }
  })
  
</script>