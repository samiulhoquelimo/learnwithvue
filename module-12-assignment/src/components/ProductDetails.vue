<script setup>
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const id = route.params.id
const product = ref({})

onBeforeMount(() => {
  fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        product.value = data
      });
});
</script>

<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
            <img v-if="product.images" class="w-full h-full object-cover"
                 :src="product?.images[Math.floor(Math.random() * product?.images?.length)]"
                 :alt="product?.title">
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to
                Cart
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to
                Wishlist
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold mb-2">{{ product?.title }}</h2>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Price:</span>
              <span class="text-gray-600">${{ product?.price }}</span>
            </div>
            <div class="mr-4">
              <span class="font-bold text-gray-700">Stock:</span>
              <span class="text-gray-600">{{ product?.stock }}</span>
            </div>
            <div class="mr-4">
              <span class="font-bold text-gray-700">Category:</span>
              <span class="text-gray-600">{{ product?.category }}</span>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700">Select Color:</span>
            <div class="flex items-center mt-2">
              <button class="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
              <button class="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
              <button class="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
              <button class="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700">Select Size:</span>
            <div class="flex items-center mt-2">
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">S
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">M
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">L
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XL
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XXL
              </button>
            </div>
          </div>
          <div>
            <span class="font-bold text-gray-700">Product Description:</span>
            <p class="text-gray-600 text-sm mt-2">{{ product?.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>