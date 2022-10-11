<template>
  <div class="space-y-10 text-center">
    <pre class="dark:text-black bg-white py-2 px-4 rounded-lg !rounded-r-none inline-block">yarn add --dev @nuxtjs/color-mode</pre>
    <a class="button button-primary button-sm py-2 px-4 rounded-lg !rounded-l-none inline-block" href="https://color-mode.nuxtjs.org" target="_blank">Docs</a>

    <div>
      <h1 class="mb-2 text-2xl font-bold">{{ $colorMode.preference }}</h1>
      <select class="dark:text-black" v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

    <div>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'" key="system">(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
    </div>

    <div class="dark:p-10 dark:bg-blue-600 dark:text-white">
      Hello World!
    </div>
  </div>
</template>

<script setup>
  const colorMode = useColorMode()
  console.log(colorMode.preference)

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Color Mode` : 'Color Mode';
    }
  })
</script>