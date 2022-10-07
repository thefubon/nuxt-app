<template>
  <div class="container space-y-10 text-center">

    <pre class="bg-white py-2 px-4 !rounded-lg !rounded-r-none inline-block">yarn add vue-the-mask</pre>
    <a class="button button-primary button-sm py-2 px-4 rounded-lg !rounded-l-none inline-block" href="https://vuejs-tips.github.io/vue-the-mask/" target="_blank">Docs</a>
    
    <div>
      <input mask="+7 (###) ###-##-##" v-mask="'+7 (###) ###-##-##'" value="+7 " type="tel" masked="true" placeholder="+7">
    </div>

  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  directives: {mask}
}
</script>