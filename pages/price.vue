<template>
  <div class="container flex justify-between space-x-6">
    <!-- RADIO -->
    <div class="space-y-12">
      <div class="flex space-x-6">
        <label v-for="(radio, n) in radios" :key="n" class="flex items-center justify-between space-x-2 p-6 cursor-pointer bg-white">
          <input v-model="price" :value="n" checked class="hidden" type="radio">
          {{  radio.value }}
          <div :class="{ active: price===n }" class="check"></div>
        </label>
      </div>
      <!-- CHACKBOX -->
      <div class="space-y-6">
        <div v-for="(item, n) in  itemsBase" :key="n" class="bg-white p-6 flex justify-between">
          <h4 class="text-2xl font-bold">{{ item.title }}</h4>
          <div class="flex space-x-2 items-center">
            <span>+{{ item.price }}</span>
            <label class="inline-block cursor-pointer">
              <input v-model="items" :value="n" class="hidden" type="checkbox">
              <div class="toggle"><span></span></div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- TOTAL -->
    <div class="w-[400px] bg-white p-6 flex flex-col justify-between rounded">
      <h2 class="text-2xl font-bold">{{ radios[this.price].text }}</h2>
      <div class="space-y-2">
        <p v-for="item in items">
          + {{ itemsBase[item].title }} -
          <span class="font-bold">{{ itemsBase[item].price }}₽</span>
        </p>
      </div>
      <p class="text-2xl font-bold text-secondary">Итого: <span v-text="total"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      radios: [
        {text: 'Первый варик за 199', value: 199},
        {text: 'Второй варик за 570', value: 570},
        {text: 'Третий варик за 1200', value: 1200},
        {text: 'Четвертый варик за 1500', value: 1500}
      ],
      items: [], // тут ты хранишь выбранные опции
      itemsBase: [  // тут у тебя описание и цена каждой опции
        {title: 'Опция 1', price: 120},
        {title: 'Опция 2', price: 150},
      ]
    }
  },
  computed: {
    total: function () {
      return this.items.reduce((sum, item) => sum + this.itemsBase[item].price, this.radios[this.price].value);
    },

  },
}
</script>

<style scoped>
.check {
  @apply border-2 border-slate-400 p-2 rounded-full duration-300;
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
