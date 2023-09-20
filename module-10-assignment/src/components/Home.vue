<script setup>
import {onBeforeMount, ref} from "vue";

const products = ref([])

onBeforeMount(() => {
  fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        products.value = data.products
      });
})
</script>

<template>
  <section id="Projects"
           class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    <div v-for="product in products" :key="product.id"
         class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a :href="`/product/${product.id}`">
        <img
            :src="product.thumbnail"
            alt="Product" class="h-80 w-72 object-cover rounded-t-xl"/>
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">{{ product.brand }}</span>
          <p class="text-lg font-bold text-black truncate block capitalize">{{ product.title }}</p>
          <div class="flex items-center">
            <p class="text-sm text-gray-600 cursor-auto ml-2">${{ product.price }}</p>
          </div>
          <div class="m-3">
            <button class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
              View Details
            </button>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>

</style>