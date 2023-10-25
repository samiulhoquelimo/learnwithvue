<script setup>

defineProps(['cart'])

</script>

<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="item in cart" :key="item.product.id">
        {{ item.product.name }} - Quantity: {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>