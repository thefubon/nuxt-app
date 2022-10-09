<template>
  <div class="space-y-10">
    <!-- 
    <NuxtLink active-class="active" href="#" exact>Menu</NuxtLink>
    <NuxtLink active-class="active" href="#">Menu</NuxtLink>
    -->

    <div class="space-y-6">
      <h2 class="text-xl text-gray-400">Tailwind CSS Native</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="item in tailwind" :key="item" class="bg-white p-6 rounded-md space-y-4 flex flex-col justify-between">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
          <div class="flex space-x-4">
            <a class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :href="item.demo">Preview</a>
            <a class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :href="item.code" target="_blank">Code</a>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <h2 class="text-xl text-gray-400">Vue 3 Native</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="item in vue3" :key="item" class="bg-white p-6 rounded-md space-y-4 flex flex-col justify-between">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
          <div class="flex space-x-4">
            <a class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :href="item.demo">Preview</a>
            <a class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :href="item.code" target="_blank">Code</a>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <h2 class="text-xl text-gray-400">Nuxt 3 Modules</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div v-for="item in modules" :key="item" class="bg-white p-6 rounded-md space-y-4 flex flex-col justify-between">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
          <div class="flex space-x-4">
            <a class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :href="item.demo">Preview</a>
            <a class="py-1 px-4 border rounded hover:border-transparent hover:bg-blue-600 hover:text-white duration-200" :href="item.code" target="_blank">Code</a>
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
          title: 'Custom Radio Button',
          desc: 'Description',
          demo: '/tailwind/custom-radio-button',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/custom-radio-button.vue'
        },
        {
          title: 'Sidebar',
          desc: 'Description',
          demo: '/tailwind/sidebar',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/sidebar.vue'
        },
        {
          title: 'Form',
          desc: 'Description',
          demo: '/tailwind/form',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/form.vue'
        },
        {
          title: 'Custom Scrollbar',
          desc: 'Description',
          demo: '/tailwind/custom-scrollbar',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/custom-scrollbar.vue'
        },
        {
          title: 'Tooltips',
          desc: 'Description',
          demo: '/tailwind/tooltips',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/tooltips.vue'
        },
        {
          title: 'Toast Messages',
          desc: 'Description',
          demo: '/tailwind/toast-messages',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/toast-messages.vue'
        },
        {
          title: 'Toggle Switches',
          desc: 'Description',
          demo: '/tailwind/toggle-switches',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/toggle-switches.vue'
        },
        {
          title: 'Read-more Button',
          desc: 'Description',
          demo: '/tailwind/read-more-button',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/read-more-button.vue'
        },
        {
          title: 'Change Background Color on Scroll',
          desc: 'Description',
          demo: '/tailwind/bg-color-scroll',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/bg-color-scroll.vue'
        }
      ],

      vue3: [
        {
          title: 'Price Calculator',
          desc: 'Description',
          demo: '/price-calculator',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/price-calculator.vue'
        },
        {
          title: 'Multi-Step Form',
          desc: 'Description',
          demo: '/multi-step-forms',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/multi-step-forms.vue'
        },
        {
          title: 'Off-Canvas',
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

      modules: [
        {
          title: 'UiKit 3 (Framework)',
          desc: 'Description',
          demo: '/modules/uikit',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/modules/uikit.vue'
        },
        {
          title: 'Swiper',
          desc: 'Description',
          demo: '/modules/swiper',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/modules/swiper.vue'
        },
        {
          title: 'Code Input',
          desc: 'Description',
          demo: '/modules/code-input',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/modules/code-input.vue'
        },
        {
          title: 'Mask Input',
          desc: 'Description',
          demo: '/modules/v-mask',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/modules/v-mask.vue'
        },
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