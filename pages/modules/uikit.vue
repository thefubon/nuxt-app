<template>

  <div class="container space-y-10">
    
    
    <div class="text-center">
      <pre class="bg-white py-2 px-4 rounded-lg inline-block">yarn add uikit</pre>
    </div>

    <div class="space-y-4">
      <h1 class="uk-heading-medium">{{greeting}}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque amet quos repudiandae esse eveniet labore sunt impedit officia, voluptas perferendis nesciunt quia ducimus itaque alias accusantium cum autem ut reprehenderit.
      </p>
      <button class="uk-button uk-button-primary" @click="doSomething">
        Buy Me
      </button>
    </div>

    <div uk-margin>
      <ul uk-accordion="multiple: true">
        <li class="uk-open">
          <a class="uk-accordion-title" href="#">{{ title1 }}</a>
          <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">{{ title2 }}</a>
          <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title" href="#">{{ title3 }}</a>
          <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="uk-background-primary uk-height-large">
      <div class="uk-card uk-card-default uk-card-body uk-text-center uk-position-z-index" data-uk-sticky="end: !.uk-height-large; offset: 80">Stick to the top</div>
    </div>
      
    <div class="" data-uk-slider="center:true;">

      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
          <li>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="https://getuikit.com/docs/images/photo.jpg" width="1800" height="1200" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="https://getuikit.com/docs/images/dark.jpg" width="1800" height="1200" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="https://getuikit.com/docs/images/light.jpg" width="1800" height="1200" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="https://getuikit.com/docs/images/photo2.jpg" width="1800" height="1200" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="https://getuikit.com/docs/images/photo3.jpg" width="1800" height="1200" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

      </div>

      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        <ul class="flex justify-center items-center space-x-4">
            <li data-uk-slider-item="0"><a class="button button-default button-sm" href="#">1</a></li>
            <li data-uk-slider-item="1"><a class="button button-default button-sm" href="#">2</a></li>
            <li data-uk-slider-item="2"><a class="button button-default button-sm" href="#">3</a></li>
            <li data-uk-slider-item="3"><a class="button button-default button-sm" href="#">4</a></li>
            <li data-uk-slider-item="4"><a class="button button-default button-sm" href="#">5</a></li>
        </ul>

    </div>

    <div class="py-20">
      <button class="button button-primary button-lg w-full" data-uk-slider-item="2" data-uk-toggle="target:#modal-full">Open Modal + Slider Position</button>
    </div>

    <div id="modal-full" class="uk-modal-full" data-uk-modal>
      <div class="uk-modal-dialog !bg-black/80">
          <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
          
          
          <div class="p-20" data-uk-height-viewport>


            <div class="uk-slider-container-offset" data-uk-slider="center:true;">

              <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src="https://getuikit.com/docs/images/photo.jpg" width="1800" height="1200" alt="">
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src="https://getuikit.com/docs/images/dark.jpg" width="1800" height="1200" alt="">
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src="https://getuikit.com/docs/images/light.jpg" width="1800" height="1200" alt="">
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src="https://getuikit.com/docs/images/photo2.jpg" width="1800" height="1200" alt="">
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src="https://getuikit.com/docs/images/photo3.jpg" width="1800" height="1200" alt="">
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      </div>
                    </div>
                  </li>
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

              </div>

              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-light"></ul>

                <ul class="flex justify-center items-center space-x-4 text-white">
                    <li data-uk-slider-item="0"><a class="button button-default button-sm" href="#">Slide 1</a></li>
                    <li data-uk-slider-item="1"><a class="button button-default button-sm" href="#">Slide 2</a></li>
                    <li data-uk-slider-item="2"><a class="button button-default button-sm" href="#">Slide 3</a></li>
                    <li data-uk-slider-item="3"><a class="button button-default button-sm" href="#">Slide 4</a></li>
                    <li data-uk-slider-item="4"><a class="button button-default button-sm" href="#">Slide 5</a></li>
                </ul>

            </div>


          </div>
      </div>
    </div>

    <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1800" height="1200" loop muted playsinline data-uk-video="autoplay: inview"></video>

  </div>

</template>

<script setup>

  const greeting = "Hello World!"

  function doSomething(){
    useNuxtApp().$uikit.notification({
      message: 'Notification Demo',
      status: 'primary',
      pos: 'bottom-center',
      timeout: 3000
    })
  }

  const title1 = ref('Item 1')
  const title2 = ref('Item 2')
  const title3 = ref('Item 3')

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - UiKit Framework` : 'UiKit Framework';
    },
    link: [
      { 
        rel: 'stylesheet', 
        href: '/css/uikit.css'
      },
    ],
    script: [
      // {
      //   src: '/js/uikit-custom.js',
      //   body: true
      // }
    ]
  })
</script>

<style scoped>
  .uk-slider .uk-active a {
    @apply !bg-blue-600 border-blue-600 text-white;
  }
</style>