<template>
  <div>
    <div class="text-center h-[200vh]">
      <button class="button button-primary" aria-label="Open Menu" @click="drawer">Открыть боковое меню</button>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <aside class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b"
      >
      </span>

      <button @click="isOpen = false">
        Close. тут меню
      </button>

    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  // Open/Clode Sidebar
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  // No Scroll Page
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  // ESC Button
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },

  setup() {
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Off-Canvas` : 'Off-Canvas';
      }
    })
  }
};
</script>

<style scoped>
  .active {
    @apply bg-red-500 text-white;
  }
  .nav-active {
    @apply bg-indigo-500 text-white;
  }
</style>