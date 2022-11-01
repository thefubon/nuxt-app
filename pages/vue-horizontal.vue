<template>
  <div>
    <div class="space-y-10 text-center">
    <pre class="dark:text-black bg-white py-2 px-4 rounded-lg !rounded-r-none inline-block">yarn add vue-horizontal@next</pre>
    <a class="button button-primary button-sm py-2 px-4 rounded-lg !rounded-l-none inline-block" href="https://vue-horizontal.fuxing.dev" target="_blank">Docs</a>

    <div class="container py-16">
    <vue-horizontal responsive scroll :button="true" class="horizontal">
      <section class="w-3/5" v-for="item in items" :key="item.i">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </section>

      <section>
        <h3>Last item?</h3>
        <p>Maybe you want to display something different at the end?</p>
      </section>
    </vue-horizontal>
  </div>

    <div class="flex flex-col gap-16">

<pre class="bg-white py-2 px-4 text-left !rounded-lg inline-block overflow-x-auto">import VueHorizontal from 'vue-horizontal';

export default {
  components: {VueHorizontal},
}</pre>

<pre class="bg-white py-2 px-4 text-left !rounded-lg inline-block overflow-x-auto">.horizontal:deep(.v-hl-container) {
  /* Space between content and scrollbar */
  padding-bottom: 16px;

  /* For firefox only */
  scrollbar-width: thin;
  scrollbar-color: orangered black;
}

.horizontal:deep(.v-hl-container::-webkit-scrollbar) {
  height: 16px;
  width: 16px;
  background: transparent;
}

.horizontal:deep(.v-hl-container::-webkit-scrollbar-track) {
  background: black;
  border-radius: 4px;
}

.horizontal:deep(.v-hl-container::-webkit-scrollbar-thumb) {
  border-radius: 6px;
  border: 4px black solid;
  background: orangered;
}</pre>

    </div>
    </div>
  </div>
</template>

<script>
// Depending on how you installed it, import it if required.
import VueHorizontal from 'vue-horizontal';

export default {
  components: {VueHorizontal},
  data() {
    return {
      // E.g: creates 5 array items...
      items: [...Array(10).keys()].map((i) => {
        return {i, title: `v-for: ${i}`, content: `🚀 Paragraph ${i}`};
      }),
    }
  }
}
</script>

<style scoped>
section,
.item {
  background: #f3f3f3;
  padding: 16px 24px;
  margin-right: 24px;
}

.horizontal:deep(.v-hl-container) {
  /* Space between content and scrollbar */
  padding-bottom: 16px;

  /* For firefox only */
  scrollbar-width: thin;
  scrollbar-color: orangered black;
}

.horizontal:deep(.v-hl-container::-webkit-scrollbar) {
  height: 16px;
  width: 16px;
  background: transparent;
}

.horizontal:deep(.v-hl-container::-webkit-scrollbar-track) {
  background: black;
  border-radius: 4px;
}

.horizontal:deep(.v-hl-container::-webkit-scrollbar-thumb) {
  border-radius: 6px;
  border: 4px black solid;
  background: orangered;
}
</style>