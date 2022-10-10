<template>
  <div>



  </div>
</template>

<script setup>
  useHead({
    link: [
      { 
        rel: 'stylesheet', 
        href: ''
      },
    ],
    script: [
      {
        src: '',
        body: true
      },
    ],
    bodyAttrs: {
      class: ''
    },
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Modal` : 'Modal';
    }
  })
  
</script>