<script setup>
import {cart} from "../store/cart.js";
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto px-12 py-8 ">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Payment</h2>
      <p class="my-10">
        <!-- {{ cart }} -->
      </p>
      <div>
        <div class="flex items-center my-5" v-for="item in cart.items">
          <p class="w-2/3">
            <router-link :to="{ name: 'product', params: { id: item.product.id } }">
              {{ item.product.title }}
            </router-link>
          </p>
          <p class="w-[100px]">
            x {{ item.quantity }}
          </p>
          <p class="w-[100px]">
            {{ item.product.price }}
          </p>
        </div>
        <div class="flex items-center my-5">
          <p class="w-2/3">
            Total Bill
          </p>
          <p class="w-[100px]">

          </p>
          <p>
            <strong>{{ cart.totalPrice }}</strong>
          </p>
        </div>
        <button @click="cart.checkout()"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cash on delivery
        </button>

        <button
            class="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <router-link to="/payment">Payment via </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>