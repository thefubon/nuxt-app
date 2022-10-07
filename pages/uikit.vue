<template>

  <div class="container space-y-10 h-[3000px]">
    
    <div class="text-center">
      <pre class="bg-white py-2 px-4 rounded-lg inline-block">https://getuikit.com/docs/installation</pre>
    </div>

    <div uk-margin>
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
    </div>

    <div class="uk-background-primary uk-height-large">
      <div class="uk-card uk-card-default uk-card-body uk-text-center uk-position-z-index" uk-sticky="end: !.uk-height-large; offset: 80">Stick to the top</div>
    </div>

  </div>

</template>

<script setup>
const title = ref('Hello World')

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - UiKit Framework` : 'UiKit Framework';
  },
  link: [
    { 
      rel: 'stylesheet', 
      href: '/css/uikit.css'
    },
  ],
  script: [
    {
      src: '/js/uikit.min.js',
      body: false
    }
  ]
})
</script>