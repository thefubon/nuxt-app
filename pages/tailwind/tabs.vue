<template>
  <div>

    <!-- The wrapper of tabs -->
    <div class="drop-shadow-lg">
        <!-- Tab Buttons -->
        <div id="tab-buttons" class="flex bg-blue-600">
            <a href="javascript:void(0)" onclick="changeTab(event, 0)" class="inline-block px-8 py-3 bg-white text-blue-600">Tab 1</a>
            <a href="javascript:void(0)" onclick="changeTab(event, 1)" class="inline-block px-8 py-3 text-white">Tab 2</a>
            <a href="javascript:void(0)" onclick="changeTab(event, 2)" class="inline-block px-8 py-3 text-white">Tab 3</a>
        </div>

        <!-- Tab Panels -->
        <div id="tab-panels" class="bg-white px-8 py-6">
            <div>
                <h1 class="text-2xl">Tab 1 Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
            </div>

            <div class="hidden">
                <h1 class="text-2xl text-red-500">Tab 2 Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
            </div>

            <div class="hidden">
                <h1 class="text-2xl text-purple-600">Tab 3 Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
            </div>
        </div>

    </div>

  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/tabs.js',
        body: true
      },
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Tabs` : 'Tabs';
    }
  })
  
</script>