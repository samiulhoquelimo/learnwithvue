<script setup>

import {ref} from 'vue'
import {images} from "./data.js";

const active = ref(0)
const isLoading = ref(true)
const imageFilter = '-webkit-filter: grayscale(100%);filter: grayscale(100%);'

const onImageLoad = () => {
  isLoading.value = false
}
const next = () => {
  isLoading.value = true;
  return (images.length) - 1 === active ? active.value = 0 : active.value++
}
const back = () => {
  isLoading.value = true;
  return 0 === active ? active.value = (images.length) - 1 : active.value--;
}

</script>

<template>
  <h4>Vue.js 3 Image Carousel</h4>

  <div class="carousel" data-ride="carousel">

    <ol class="carousel-indicators">
      <li v-for="(image, index) in images" :key="image.id" :class="index === active?'active':''"
          @click="active = index"/>
    </ol>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="images[active].download_url" alt="_" class="d-block w-100 img img-responsive"
             height="700" @load="onImageLoad">
        <div class="carousel-caption d-none d-md-block">
          <div v-show="isLoading" class="loader"></div>
          <h5>{{ images[active].author }}</h5>
          <a v-show="!isLoading" :href="images[active].url" target="_blank">Download</a>
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
  <ol>
    <img v-for="(image, index) in images" :key="image.id" :src="image.download_url"
         :style="active !== index?imageFilter:''"
         alt="" class="mx-1" height="40" style="cursor: pointer;" @click="active=index">
  </ol>

</template>

<style scoped>

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  margin: auto;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>