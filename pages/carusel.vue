<template>
  <div class="container text-center">
		<pre class="bg-white py-2 px-4 rounded-lg inline-block mb-10">yarn add vue3-carousel</pre>

		<carousel :settings="settings" :breakpoints="breakpoints">
			<slide v-for="slide in 10" :key="slide">
				<div class="carousel__item">{{ slide }}</div>
			</slide>

			<template #addons>
				<navigation />
			</template>
		</carousel>
	</div>
</template>

<script>
// https://ismail9k.github.io/vue3-carousel/
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
		Carousel,
		Pagination,
		Navigation,
		Slide
	},
	setup() {
		return {
			// carousel settings
			settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},
			// breakpoints are mobile first
			// any settings not specified will fallback to the carousel settings
			breakpoints: {
				// 640px and up
				640: {
					itemsToShow: 2,
					snapAlign: "start"
				},
				// 700px and up
				768: {
					itemsToShow: 3.5,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 5,
					snapAlign: "start"
				}
			}
		};
	}
}
</script>

<style scoped>
  .carousel__item {
	min-height: 200px;
	width: 100%;
	background-color: #642afb;
	color: white;
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>
