<script setup>
defineProps(['userName'])
</script>

<template>
  <h2>Child Component</h2>
  <p>Here we get user name {{ userName }} from defineProps</p>
  <p>{{ userName }}</p>
</template>

<style scoped>

</style>