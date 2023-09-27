<script setup>

import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div id="app">
    <h1 class="text-5xl font-bold">A Simple Todo Application</h1>
    <div>
      <TodoInput/>
    </div>
    <br/>
    <div>
      <TodoList/>
    </div>
  </div>
</template>

<style scoped>
</style>
