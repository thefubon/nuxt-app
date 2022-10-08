<template>
  <div class="container">
  <!-- This text always show up -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas vitae scel

        <!-- The three dots -->
        <span id="dots">...</span>

        <!-- This content only be shown as needed -->
        <span id="more" class="hidden">erisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
            vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In libero
            sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
            fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            </span>
    </p>

    <!-- Implement the read more/read less button -->
    <button onclick="toggleText()" id="button"
        class="mt-3 px-5 py-2 bg-rose-500 text-white duration-300 hover:bg-rose-700">Read
        more</button>
  
  </div>
</template>

<script setup>
  useHead({
    script: [
      
      {
        src: '/js/tailwindcss/read-more-button.js',
        body: true
      }
    ]
  })
</script>