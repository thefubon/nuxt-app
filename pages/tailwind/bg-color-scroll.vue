<template>
  <div class="container space-y-4 text-white">

    <div class="content"></div>
  

    <div>
      Explanation
      Each time the user scrolls up or down, we call a function that can manipulate the background color:
    </div>

    <pre class="bg-white text-black py-2 px-4 !rounded-lg inline-block">window.onscroll = function (event) { // other code here }</pre>

    <div>
      To calculate the scroll distance, we use this:
    </div>

    <pre class="bg-white text-black py-2 px-4 !rounded-lg inline-block">var scroll = window.pageYOffset;</pre>


    <div>
      To programmatically set the background color, we use this Javascript code:
    </div>

    <pre class="bg-white text-black py-2 px-4 !rounded-lg inline-block">body.style.backgroundColor = 'green';</pre>

    <div>
      to make the color transitions smooth, we add this CSS line:
    </div>

    <pre class="bg-white text-black py-2 px-4 !rounded-lg inline-block">transition: background 1s ease;</pre>

  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/bg-color-scroll.js',
        body: true
      }
    ]
  })
</script>

<style>
  body {
      height: 1000vh;
      transition: background 1s ease;
  }

  .content {
      padding: 50px;
      color: white;
      text-align: center;
  }
</style>