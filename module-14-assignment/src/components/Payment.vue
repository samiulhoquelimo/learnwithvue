<script setup>
import {cart} from "../store/cart.js"

window.paypalLoadScript({clientId: "test"}).then((paypal) => {
  paypal.Buttons().render("#paypal-buttons")
})

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

        <h2 class="text-2xl font-bold tracking-tight text-red-900">Complete payment via:</h2>
        <br/>
        <div id="paypal-buttons"></div>

      </div>
    </div>
  </div>
</template>

<style></style>