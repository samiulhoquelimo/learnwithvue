<script setup>
defineProps(['message'])
const emit = defineEmits(['messageEmitted'])
const emitMessageClick = () => {
  emit('messageEmitted', 'This is the message send from child')
}
</script>

<template>
  <h2 class="text-2xl my-10">Message show in Child</h2>
  <p class="my-5">{{ message }}</p>
  <button @click="emitMessageClick"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click from child
  </button>
</template>

<style scoped>

</style>