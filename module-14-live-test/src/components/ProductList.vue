<script setup>
defineProps(['products'])
const emit = defineEmits(['add-to-cart'])
const addToCart = (product) => {
  emit('add-to-cart', product)
}
</script>

<template>
  <div>
    <h1>Product List</h1>
    <div v-for="product in products" :key="product.id">
      <div>
        <h2>{{ product.name }}</h2>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>