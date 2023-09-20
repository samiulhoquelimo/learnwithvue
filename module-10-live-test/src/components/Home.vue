<script setup>

</script>

<template>
  Home
  <div>
    <router-link :to="{ name: 'user', params: { username: 'Md. Samiul Hoque' } }">
      User Name -> Md. Samiul Hoque -> Click
    </router-link>
  </div>
</template>

<style scoped>

</style>