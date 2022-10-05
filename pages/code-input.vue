<template>
  <AppBack/>

  <div class="container text-center space-y-6">
    <pre class="bg-white py-2 px-4 rounded-lg inline-block">yarn add vue3-verification-code-input</pre>

    <code-input
      @complete="completed = true"
      :fields="4"
      :fieldWidth="56"
      :fieldHeight="56"
      :required="true"
    />

    <button class="button button-primary button-sm" :disabled="!completed">
      Continue
    </button>
  </div>
</template>

<script setup>
  import CodeInput from "/components/app/CodeInput.vue"
  import { ref } from "vue";

  const completed = ref(false);
</script>