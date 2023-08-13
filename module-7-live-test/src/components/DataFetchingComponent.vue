<script setup>

import {onBeforeUnmount, onMounted, ref} from "vue";

const user = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('https://dummyjson.com/users/1');
    user.value = await response.json();
  } catch (error) {
    console.error(error);
  }
})

onBeforeUnmount(() => {
  user.value = null
})

</script>

<template>
  <div>
    <h2>Fetches data from an API</h2>
    <p>{{ user }}</p>
  </div>
</template>

<style scoped>

</style>