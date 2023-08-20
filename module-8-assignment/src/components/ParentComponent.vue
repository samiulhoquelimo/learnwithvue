<script setup>
import ChildComponent from "./ChildComponent.vue";
import {ref} from "vue";

const message = ref('No message has been set yet')

const messageEmitted = (msg) => {
  message.value = msg
}

const messageEmittedFromParent = () => {
  message.value = "This is the message send from parent"
}

</script>

<template>
  <h2 class="text-2xl my-10">Message show in Parent</h2>
  <p class="my-5">{{ message }}</p>
  <p>
    <button @click="messageEmittedFromParent"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click from parent
    </button>
  </p>
  <hr>
  <p>
    <ChildComponent :message="message" @messageEmitted="messageEmitted"/>
  </p>

</template>

<style scoped>

</style>