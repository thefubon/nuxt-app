export default defineNuxtConfig({

  app: {
    head: {
      title: 'Nuxt 3',
      titleTemplate: '%s',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/favicon.svg' 
        },
        {
          rel: 'apple-touch-icon',
          href: '/img/apple-touch-icon.png'
        },
      ],
      bodyAttrs: {
        class: 'antialiased text-dark bg-slate-100'
      }
    },
  },

  components: true,

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: './tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },


})
