<template>
  <input type="text" v-mask="'+7 (###) ###-##-##'" v-model="inputPhoneModel">
</template>
<script>
import {mask} from 'vue-the-mask'
export default {
  directives: {mask}
}
</script>