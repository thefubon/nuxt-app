<template>
  <div class="container space-y-10">

    <div class="text-center">
      <pre class="bg-white py-2 px-4 rounded-lg inline-block">yarn add vue-the-mask</pre>
      <a class="bg-white py-2 px-4 rounded-lg inline-block" html="https://vuejs-tips.github.io/vue-the-mask/" target="_blank">Settings Docs</a>
    </div>
    
    <input type="text" v-mask="'+7 (###) ###-##-##'" v-model="inputPhoneModel" placeholder="+7">

  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  directives: {mask}
}
</script>