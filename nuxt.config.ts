export default defineNuxtConfig({

  app: {
    head: {
      title: 'Nuxt 3',
      titleTemplate: '%s | Components',
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

  css: [
    // '@/assets/scss/app.scss'
  ],

  modules: [
    'nuxt-swiper',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-icon',
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

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  
})
