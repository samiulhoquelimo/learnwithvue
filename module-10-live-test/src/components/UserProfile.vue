<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
const username = route.params.username
</script>

<template>
  UserProfile
  <h1 class="text-xl mb-2">
    Hello {{ username }}!
  </h1>
</template>

<style scoped>

</style>