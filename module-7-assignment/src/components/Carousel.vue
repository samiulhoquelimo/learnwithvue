<script setup>

import {onBeforeUnmount, onMounted, ref} from 'vue'
import {images} from "../data.js";

const active = ref(0)
const interval = ref(null)

const next = () => {
  (images.length - 1) === active.value ? active.value = 0 : active.value++
}
const back = () => {
  0 === active.value ? active.value = (images.length - 1) : active.value--
}

onMounted(() => {
  console.log('Carousel onMounted')
  interval.value = setInterval(() => {
    next()
  }, 3000);
})

onBeforeUnmount(() => {
  console.log('Carousel onBeforeUnmount')
  clearInterval(interval.value)
})

</script>

<template>
  <div class="carousel" data-ride="carousel">

    <ol class="carousel-indicators">
      <li v-for="(image, index) in images" :key="image.id" :class="index === active?'active':''"
          @click="active = index"/>
    </ol>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="images[active].download_url" alt="_" class="d-block w-100 img img-responsive"
             height="300">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ images[active].author }}</h5>
          <a :href="images[active].url" target="_blank">Download</a>
        </div>
      </div>
      <a class="carousel-control-prev"
         data-slide="prev" href="#" role="button" @click.prevent="back">
        <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next"
         data-slide="next" href="#" role="button" @click.prevent="next">
        <span aria-hidden="true" class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
  <br>
</template>

<style scoped>

</style>