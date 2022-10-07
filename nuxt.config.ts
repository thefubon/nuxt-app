export default defineNuxtConfig({

  app: {
    head: {
      title: 'Nuxt 3',
      titleTemplate: '%s | Components Collection',
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
          href: '/img/favicon.ico' 
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

  vite: {
		css: {
			preprocessorOptions: {
				scss: {},
        sass: {},
			},
		},
	},

  pageTransition: {
    name: 'fade',
    mode: 'out-in' // default
  },
  layoutTransition: {
    name: 'slide',
    mode: 'out-in' // default
  } 

})
