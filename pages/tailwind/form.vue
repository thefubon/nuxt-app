<template>
  <div class="container">
    <form class="space-y-10">
        
        <div class="flex space-x-4">
            <div>
                <input type="checkbox" checked name="checkbox-one" id="checkbox-one" class="bg-gray-200 hover:bg-gray-300 cursor-pointer 
        w-12 h-12 border-3 border-amber-500 focus:outline-none rounded-lg" />
                <label for="checkbox-one" class="ml-3">Checkbox One</label>
            </div>
            <div>
                <input type="checkbox" checked name="checkbox-two" id="checkbox-two" class="bg-amber-200 hover:bg-amber-400 cursor-pointer 
        w-12 h-12 border-3 border-rose-500 rounded-lg checked:bg-green-500" />
                <label for="checkbox-two" class="ml-3">Checkbox Two</label>
            </div>

            <div>
                <input type="checkbox" name="checkbox-three" id="checkbox-three" class="bg-pink-300 hover:bg-pink-400 cursor-pointer 
        w-12 h-12 border-3 border-rose-500 rounded-lg checked:bg-rose-600" />
                <label for="checkbox-three" class="ml-3">Checkbox Three</label>
            </div>
        </div>

        <div class="flex space-x-4">
            <div>
                <input type="radio" checked="checked" name="radio" id="radio-one"
                    class="w-12 h-12 bg-pink-300 checked:bg-rose-500 cursor-pointer" />
                <label for="radio-one" class="ml-2">Radio One</label>
            </div>

            <div>
                <input type="radio" name="radio" id="radio-two"
                    class="w-12 h-12 bg-amber-500 hover:bg-amber-700 checked:bg-rose-500 cursor-pointer" />
                <label for="radio-two" class="ml-2">Radio Two</label>
            </div>

            <div>
                <input type="radio" name="radio" id="radio-three"
                    class="w-12 h-12 bg-green-400 hover:bg-yellow-700 checked:bg-rose-500 cursor-pointer" />
                <label for="radio-three" class="ml-2">Radio Three</label>
            </div>

            <div>
                <input type="radio" name="radio" id="radio-four"
                    class="w-12 h-12 bg-purple-400 hover:bg-purple-700 checked:bg-rose-500 cursor-pointer" />
                <label for="radio-four" class="ml-2">Radio Four</label>
            </div>
        </div>
    </form>
  </div>
    
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Form` : 'Form';
  }
})
</script>