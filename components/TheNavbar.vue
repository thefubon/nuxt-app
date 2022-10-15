<template>
  <div class="space-y-10 md:space-y-16 dark:text-dark">
    <!-- 
    <NuxtLink active-class="active" href="#" exact>Menu</NuxtLink>
    <NuxtLink active-class="active" href="#">Menu</NuxtLink>
    -->

    <div class="space-y-6">
      <h2 class="text-xl text-gray-400">Tailwind CSS Native</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
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
          title: 'Custom Radio & Checkbox',
          desc: 'Description',
          demo: '/tailwind/custom-radio-checkbox',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/custom-radio-checkbox.vue'
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
        },
        {
          title: 'Modal Images',
          desc: 'Description',
          demo: '/tailwind/modal-images',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/modal-images.vue'
        },
        {
          title: 'Image Slideshow',
          desc: 'Description',
          demo: '/tailwind/image-slideshow',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/image-slideshow.vue'
        },
        {
          title: 'Mega Menu',
          desc: 'Description',
          demo: '/tailwind/mega-menu',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/mega-menu.vue'
        },
        {
          title: 'Tabs',
          desc: 'Description',
          demo: '/tailwind/tabs',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/tabs.vue'
        },
        {
          title: 'To Top Button',
          desc: 'Description',
          demo: '/tailwind/to-top-button',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/to-top-button.vue'
        },
        {
          title: 'Dropdown',
          desc: 'Description',
          demo: '/tailwind/dropdown',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/dropdown.vue'
        },
        {
          title: 'Floating Input Label',
          desc: 'Description',
          demo: '/tailwind/floating-input-label',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/floating-input-label.vue'
        },
        {
          title: 'Checkbox to Show/Hide',
          desc: 'Description',
          demo: '/tailwind/checkbox-to-show-hide',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/checkbox-to-show-hide.vue'
        },
        {
          title: 'Modal Dialog',
          desc: 'Description',
          demo: '/tailwind/modal-dialog',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/modal-dialog.vue'
        },
        {
          title: 'Accordion',
          desc: 'Description',
          demo: '/tailwind/accordion',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/accordion.vue'
        },
        {
          title: 'Sticky',
          desc: 'Description',
          demo: '/tailwind/sticky',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/tailwind/sticky.vue'
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
          title: 'Preline UI (Tailwind CSS component library)',
          desc: 'Description',
          demo: '/modules/preline',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/modules/preline.vue'
        },
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
        {
          title: 'Color Mode',
          desc: 'Description',
          demo: '/modules/color-mode',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/modules/color-mode.vue'
        },
        {
          title: 'Content 2',
          desc: 'Description',
          demo: '/blog',
          code: 'https://github.com/thefubon/Nuxt3-Components-Collection/blob/master/pages/blog/'
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