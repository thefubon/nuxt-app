<template>

  <div class="container">
    
    <div class="text-center mb-10">
      <pre class="bg-white py-2 px-4 rounded-lg inline-block">https://getuikit.com/docs/installation</pre>
    </div>

    <p uk-margin>
      <ul uk-accordion="multiple: true">
          <li class="uk-open">
              <a class="uk-accordion-title" href="#">Item 1</a>
              <div class="uk-accordion-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </li>
          <li>
              <a class="uk-accordion-title" href="#">Item 2</a>
              <div class="uk-accordion-content">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
              </div>
          </li>
          <li>
              <a class="uk-accordion-title" href="#">Item 3</a>
              <div class="uk-accordion-content">
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
              </div>
          </li>
      </ul>
    </p>

  </div>

</template>

<script setup>
const title = ref('Hello World')

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - UiKit Framework` : 'Site Title';
  },
  link: [
    { 
      rel: 'stylesheet', 
      href: '/assets/css/uikit.css',
      crossorigin: '' 
    },
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit.min.js',
      body: false
    }
  ]
})
</script>