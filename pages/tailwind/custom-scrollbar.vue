<template>

  <div class="container space-y-10 text-center h-[3000px]">

    <pre class="bg-white py-2 px-4 !rounded-lg !rounded-r-none inline-block">yarn add tailwindcss-scrollbar</pre>
    <a class="button button-primary button-sm py-2 px-4 rounded-lg !rounded-l-none inline-block" href="https://jonstuebe.com/blog/tailwindcss-scrollbar" target="_blank">Docs</a>

<div class="">
<pre class="bg-white py-2 px-4 text-left !rounded-lg inline-block">// tailwind.config.js
  
plugins: [
  require("tailwindcss-scrollbar"),
],
variants: {
  scrollbar: ["dark"],
},</pre>
    </div>

    
    <div class="w-full flex gap-12 snap-x overflow-x-auto py-14 scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-900 scrollbar-thumb-rounded-lg">
      <div class="snap-start scroll-ml-6 shrink-0 relative first:pl-0 last:pr-[calc(100%-21.5rem)]">
        <div class="bg-stripes-pink w-6 absolute top-0 left-0 bottom-0"></div>
        <img class="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
      </div>
      <div class="snap-start scroll-ml-6 shrink-0 relative first:pl-6 last:pr-[calc(100%-21.5rem)]">
        <div class="bg-stripes-pink w-6 absolute top-0 -left-6 bottom-0"></div>
        <img class="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
      </div>
      <div class="snap-start scroll-ml-6 shrink-0 relative first:pl-6 last:pr-[calc(100%-21.5rem)]">
        <div class="bg-stripes-pink w-6 absolute top-0 -left-6 bottom-0"></div>
        <img class="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
      </div>
      <div class="snap-start scroll-ml-6 shrink-0 relative first:pl-6 last:pr-[calc(100%-21.5rem)]">
        <div class="bg-stripes-pink w-6 absolute top-0 -left-6 bottom-0"></div>
        <img class="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
      </div>
      <div class="snap-start scroll-ml-6 shrink-0 relative first:pl-6 last:pr-[calc(100%-21.5rem)]">
        <div class="bg-stripes-pink w-6 absolute top-0 -left-6 bottom-0"></div>
        <img class="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80">
      </div>
    </div>
  </div>
    

</template>

<script setup>

useHead({
  htmlAttrs: {
    class: 'overflow-y-scroll'
  },
  bodyAttrs: {
    class: 'bg-gray-800 m-0 antialiased scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-900 scrollbar-thumb-rounded-lg w-full h-full'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Custom Scrollbar` : 'Custom Scrollbar';
  }
})
</script>