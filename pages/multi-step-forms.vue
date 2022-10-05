<template>
  <AppBack/>

  <form class="container">

    <span v-for="e in errors"></span>

    <!-- STEP 1 -->

    <section v-if="step == 1" class="space-y-2">
      <h3>Step 1</h3>

      <input v-model="form.name" type="text" placeholder="Имя" class="block w-full">

    </section>

    <!-- STEP 2-->

    <section v-if="step == 2" class="space-y-2">
      <h3>Step 2 </h3>

      <input v-model="form.phone" type="tel" placeholder="Номер телефона" class="block w-full">

      <input v-model="form.email" type="email" placeholder="Email" class="block w-full">

    </section>

    <!-- STEP 3 -->

    <section v-if="step == 3" class="space-y-2">
      <h3>Step 3</h3>

      <textarea v-model="form.message" cols="30" rows="4" placeholder="Сообщение..." class="block w-full"></textarea>

    </section>

    <button
      v-if="step != 1"
      @click.prevent="prevStep" class="button button-default button-sm mt-4 mr-4">Назад</button>

    <button
      v-if="step != totalsteps"
      @click.prevent="nextStep" class="button button-primary button-sm mt-4">Вперед</button>

    <button
      v-if="step == 3"
      @click.prevent="sendEnquiry" class="button button-primary button-sm mt-4">Отправить</button>

  </form>

</template>

<script>
export default {

  data() {
    return {

      step: 1,
      totalsteps: 3,
      errors: [],

      form: {

        name: null,
        email: null,
        phone: null,
        message: null

      }

    }
  },

  methods: {

    prevStep:function() {

      this.step--;

    },

    nextStep:function() {

      if(this.step == 1){
        if(!this.form.name){
          return false;
        }
      }

      this.step++;

    },

    sendEnquiry:function() {

      alert('Ваше сообщение отправлено!');

    }

  },

  mounted() {
    
    

  }

}
</script>

<style>

</style>