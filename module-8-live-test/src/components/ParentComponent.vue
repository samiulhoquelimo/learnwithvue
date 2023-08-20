<script setup>
import ChildComponent from "./ChildComponent.vue";

const userName = 'Md. Samiul Hoque'
</script>

<template>
  <h2>Parent Component</h2>
  <p>Here we pass user name {{ userName }} to the child component</p>
  <hr>
  <ChildComponent :user-name="userName"/>
</template>

<style scoped>

</style>