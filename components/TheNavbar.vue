<template>
  <div>
    <!-- 
    <NuxtLink active-class="active" href="#" exact>Menu</NuxtLink>
    <NuxtLink active-class="active" href="#">Menu</NuxtLink>
    -->

    <div class="space-y-6">
      <h2 class="text-3xl font-bold">Tailwind CSS Native</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="item in tailwind" :key="item" class="bg-white p-6 rounded space-y-4 flex flex-col justify-between">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
          <div class="flex space-x-4">
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.demo">Preview</NuxtLink>
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.code" target="_blank">Code</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <h2 class="text-3xl font-bold">Vue 3 Native</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="item in vue3" :key="item" class="bg-white p-6 rounded space-y-4 flex flex-col justify-between">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
          <div class="flex space-x-4">
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.demo">Preview</NuxtLink>
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.code" target="_blank">Code</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <h2 class="text-3xl font-bold">Plugins</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="item in plugins" :key="item" class="bg-white p-6 rounded space-y-4 flex flex-col justify-between">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
          <div class="flex space-x-4">
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.demo">Preview</NuxtLink>
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.code" target="_blank">Code</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <h2 class="text-3xl font-bold">Frameworks</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="item in frameworks" :key="item" class="bg-white p-6 rounded space-y-4 flex flex-col justify-between">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
          <div class="flex space-x-4">
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.demo">Preview</NuxtLink>
            <NuxtLink class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :to="item.code" target="_blank">Code</NuxtLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
definePageMeta({
  layout: "empty",
});

// {
//   title: '',
//   desc: '',
//   demo: '',
//   code: ''
// }

export default {
  data() {
    return {
      tailwind: [
        {
          title: 'Custom radio button',
          desc: 'Description',
          demo: '/tailwind/custom-radio-button',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/custom-radio-button.vue'
        },
        {
          title: 'Sidebar',
          desc: 'Description',
          demo: '/tailwind/sidebar',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/sidebar.vue'
        }
      ],

      vue3: [
        {
          title: 'Price calculator',
          desc: 'Description',
          demo: '/price-calculator',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/price-calculator.vue'
        },
        {
          title: 'Multi-step form',
          desc: 'Description',
          demo: '/multi-step-forms',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/multi-step-forms.vue'
        },
        {
          title: 'Off-canvas',
          desc: 'Description',
          demo: '/offcanvas',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/offcanvas.vue'
        },
        {
          title: 'Drawer',
          desc: 'Description',
          demo: '/drawer',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/drawer.vue'
        },
        {
          title: 'Modal',
          desc: 'Description',
          demo: '/modal',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/modal.vue'
        },
        {
          title: 'Toggle Transition',
          desc: 'Description',
          demo: '/toggle-transition',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/toggle-transition.vue'
        }
      ],

      plugins: [
        {
          title: 'Code input',
          desc: 'Description',
          demo: '/code-input',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/code-input.vue'
        },
        {
          title: 'Swiper',
          desc: 'Description',
          demo: '/swiper',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/swiper.vue'
        }
      ],

      frameworks: [
        {
          title: 'UiKit 3',
          desc: 'Description',
          demo: '/uikit',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/uikit.vue'
        }
      ],
    }
  }
}
</script>

<style scoped>
  .active {
    @apply bg-indigo-500 text-white;
  }
</style>