<template>
  <div class="container h-[3000px]">
    <button @click="toggleState">Open Content</button> 
    <div v-if="toggleOpen"> 
      <p>Hello, I'm a toggle window.</p> 
    </div>
    <div v-if="toggleOpen" class="fixed inset-0 bg-black/75 flex justify-center items-center">
      <button @click="toggleState" class="button button-primary">Closed</button> 
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      bodyAttrs: {
        class: ''
      }
    })
  },

  data() {
    return {
      toggleOpen: false 
    }
  },

  methods: { 
    toggleState() { 
      this.toggleOpen = !this.toggleOpen; 
    } 
  },

  // No Scroll Page
  watch: {
    toggleOpen: {
      immediate: true,
      handler(toggleOpen) {
        if (process.client) {
          if (toggleOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  
}
</script>
