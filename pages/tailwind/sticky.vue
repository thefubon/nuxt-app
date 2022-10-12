<template>
  <div>
    <nav id="nav" class="bg-white w-full">
      <ul class="container px-4 flex justify-center space-x-2">
        <li><a href="#">Sticky Menu</a></li>
      </ul>
      <a class="menu">
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
        <div class="bar bar-3"></div>
      </a>
    </nav>
  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: '/js/tailwindcss/sticky.js',
        body: true
      }
    ],
    bodyAttrs: {
      class: 'h-[200vh] bg-slate-200'
    },
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Sticky` : 'Sticky';
    }
  })
</script>

<style scoped>
  nav {
    position: fixed;
    top: 100px;
    left: 0;
    transition: 0.6s;
    padding: 40px 0;
  }

  nav.sticky {
    padding: 10px 0;
    position: fixed !important;
    top: 0px !important;
  }

  nav .brand {
    position: relative;
    font-weight: 700;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 992px) {
  nav .brand {
    position: absolute;
    left: 10px;
    font-weight: 700;
    text-decoration: none;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  nav {
    height: 60px;
  }
  nav ul {
    position: absolute;
    top: 60px;
    left: 0;
    width: calc(100% - 20px);
    margin: 10px;
    display: none;
    border-radius: 5px;
  }
  nav ul li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    line-height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  nav .menu {
    width: 50px;
    height: 50px;
    transition: 0.6s;
    position: absolute;
    right: 20px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  nav .menu .bar {
    position: absolute;
    width: 40px;
    height: 7px;
    background: #000;
    border-radius: 4px;
    transition: 0.5s;
  }

  nav .menu .bar-1 {
    transform: translateY(-15px);
  }

  nav .menu .bar-3 {
    transform: translateY(-15px);
  }

  nav .menu .bar-2 {
    width: 30px;
    left: 5px;
  }

  nav .menu .bar-3 {
    transform: translateY(15px);
    width: 20px;
    left: 5px;
  }

  nav.sticky .menu {
    background: #000;
  }
  nav.sticky .menu .bar {
    background: #fff;
  }

  .menu.active .bar-1 {
    width: 40px;
    transform: translateY(0px) rotate(45deg);
  }

  .menu.active .bar-2 {
    transform: translateX(100px);
  }

  .menu.active .bar-3 {
    width: 40px;
    transform: translateY(0px) rotate(315deg);
  }

  nav.active ul {
    display: block;
  }
}

</style>