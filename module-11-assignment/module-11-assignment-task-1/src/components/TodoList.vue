<script setup>

import {useTodoStore} from '../store/todoStore';

const todoStore = useTodoStore();

const tasks = todoStore.tasks;

const removeTask = (taskId) => {
  todoStore.removeTask(taskId);
};

const toggleTaskStatus = (taskId) => {
  todoStore.toggleTaskStatus(taskId);
};

</script>

<template>
  <ul>
    <li v-for="task in tasks" :key="task.id" class="mt-3">
      <input :id="task.id" type="checkbox" :checked="task.done" @change="toggleTaskStatus(task.id)"/>
      <span class="badge"> {{ task.name }}</span>
      <button @click="removeTask(task.id)" class="btn btn-xs">Remove</button>
    </li>
  </ul>
</template>

<style scoped>

</style>