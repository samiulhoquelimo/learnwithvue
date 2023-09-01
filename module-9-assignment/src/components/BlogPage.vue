<script setup>
import {ref} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute()
const {id} = route.params

const blog = ref(null);
fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    .then(response => response.json())
    .then(data => blog.value = data['postDetails']);

</script>

<template>
  <h1 v-show="!blog" class="p-9 content-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-900">
    Not found the blog</h1>
  <div v-show="blog" class="p-6 bg-white border border-gray-200 rounded-lg shadow">
    <img class="rounded-t-lg" :src="blog?.img" alt=""/>
    <div class="p-5">
      <p class="mb-2 text-2xl font-bold text-gray-900">{{ blog?.title }}</p>
      <p class="mb-3 text-xl font-normal text-gray-700">{{ blog?.content }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>