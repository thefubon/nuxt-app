import UIkit from 'uikit'
UIkit.container = '#__nuxt'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('uikit', UIkit)
})