<template>
  <div>
    <!--LiveInternet counter--><a href="https://www.liveinternet.ru/click"
    target="_blank"><img id="licntC4F4" width="88" height="31" style="border:0" 
    title="LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня"
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
    alt=""/></a><!--/LiveInternet-->
  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/counter.js',
        body: true
      }
    ]
  })
</script>