<template>
  <div class="container flex justify-between">

    <!-- RADIO -->
    <div class="space-y-6">
      
      <div class="flex space-x-6">
        <label class="flex justify-between p-6 cursor-pointer bg-white">
          <input type="radio" class="hidden" :value="0" v-model="price" checked>
          199
          <div class="check" :class="{ active: price===0 }"></div>
        </label>

        <label class="flex justify-between p-6 cursor-pointer bg-white">
          <input type="radio" class="hidden" :value="1" v-model="price">
          570
          <div class="check" :class="{ active: price===1 }"></div>
        </label>

        <label class="flex justify-between p-6 cursor-pointer bg-white">
          <input type="radio" class="hidden" :value="2" v-model="price">
          1200
          <div class="check" :class="{ active: price===2 }"></div>
        </label>

        <label class="flex justify-between p-6 cursor-pointer bg-white">
          <input type="radio" class="hidden" :value="3" v-model="price">
          1500
          <div class="check" :class="{ active: price===3 }"></div>
        </label>
      </div>

      <!-- CHACKBOX -->
      <div class="space-y-6">
        <div class="bg-white p-6 flex justify-between">
          <h4 class="text-2xl font-bold">Заголовок</h4>
          <div class="flex space-x-2 items-center">
            <span>+150</span>
            <label class="inline-block cursor-pointer">
              <input type="checkbox" class="hidden" :value="150" v-model="items">
              <div class="toggle"><span></span></div>
            </label>
          </div>
        </div>

        <div class="bg-white p-6 flex justify-between">
          <h4 class="text-2xl font-bold">Заголовок</h4>
          <div class="flex space-x-2 items-center">
            <span>+120</span>
            <label class="inline-block cursor-pointer">
              <input type="checkbox" class="hidden" :value="120" v-model="items">
              <div class="toggle"><span></span></div>
            </label>
          </div>
        </div>
      </div>

    </div>

    <!-- TOTAL -->
    <div class="bg-white w-[400px] h-[300px] p-6 flex flex-col justify-between rounded">
      <h2 class="text-2xl font-bold">{{radios[this.price].text}}</h2>
      <p class="text-2xl font-bold text-secondary">Итого: <span v-text="total"></span></p>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        price: '0',
        radios:[
          {text:'Первый варик за 199', value: 199},
          {text:'Второй варик за 570', value:570},
          {text:'Третий варик за 1200', value:1200},
          {text:'Четвертый варик за 1500', value:1500}
        ],
        items: [],
      }
    },
    computed: {
      total: function() {
        return this.items.reduce((sum, item) => sum + item, this.radios[this.price].value);
      }
    },
  }
</script>

<style scoped>
  .check {
    @apply border-2 border-slate-400 p-4 rounded-full duration-300;
  }
  .check.active {
    @apply !bg-primary-600 !border-primary-600;
  }
  input:checked + .check {
    @apply !bg-primary-600 !border-primary-600;
  }

  .toggle {
    @apply border w-16 h-8 flex items-center rounded-full px-1.5 bg-slate-400 duration-300 outline-none;
  }
  .toggle span {
    @apply w-6 h-6 bg-white rounded-full translate-x-0 duration-300;
  }
  input:checked + .toggle {
    @apply bg-primary-600;
  }
  input:checked + .toggle span {
    @apply bg-white translate-x-6;
  }
</style>