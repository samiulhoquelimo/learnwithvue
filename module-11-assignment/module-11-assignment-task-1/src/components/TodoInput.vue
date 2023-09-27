<script setup>

import {ref} from 'vue';
import {useTodoStore} from '../store/todoStore';

const taskName = ref('');
const todoStore = useTodoStore();

const addTask = () => {
  if (taskName.value.trim() !== '') {
    todoStore.addTask(taskName.value);
    taskName.value = '';
  }
};

</script>

<template>
  <div>
    <input v-model="taskName" @keyup.enter="addTask" placeholder="Add a new task" class="input w-full max-w-xs m-6"/>
    <button @click="addTask" class="btn">Add Task</button>
  </div>
</template>

<style scoped>

</style>