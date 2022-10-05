<template>
  <AppBack/>
  
  <form>

    <section>
      <h3>Step 1</h3>

      <input type="text" placeholder="Ваше имя" class="block">

    </section>

    <section>
      <h3>Step 2 </h3>

      <input type="tel" placeholder="Ваш номер телефона" class="block">

      <input type="email" placeholder="Ваш Email" class="block">

    </section>

    <section>
      <h3>Step 3</h3>
    </section>

  </form>

</template>

<script>
export default {

  data() {
    return {

      form: {

        name:null,
        email:null,
        phone:null,
        message:null

      }

    }
  },

  mounted(){
    
    

  }

}
</script>

<style>

</style>