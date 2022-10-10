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
      }
    ],
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Modal` : 'Modal';
    }
  })
  
</script>