<script setup>
import {ref} from "vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";

const products = ref([
  {id: 1, name: "Product 1", price: 10.99},
  {id: 2, name: "Product 2", price: 19.99},
  {id: 3, name: "Product 3", price: 7.49},
]);

const cart = ref([]);

function addToCart(product) {
  const cartItem = cart.value.find((item) => item.product.id === product.id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.value.push({product, quantity: 1});
  }
}

</script>

<template>
  <div>
    <ProductList :products="products" @add-to-cart="addToCart"/>
    <Cart :cart="cart"/>
  </div>
</template>

<style scoped>
</style>
