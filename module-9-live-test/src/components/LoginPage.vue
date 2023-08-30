<script setup>
import {ref} from 'vue';
import LandingPage from "./LandingPage.vue";

const username = ref('');
const password = ref('');
const isLoggedIn = ref(false);

const login = () => {
  if (username.value && password.value) {
    isLoggedIn.value = true
  }
};

</script>

<template>
  <div>
    <form @submit.prevent="login" v-show="!isLoggedIn">
      <label for="username">Username/Email:</label>
      <input v-model="username" type="text" id="username" required/>
      <br/>
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required/>
      <br/>
      <button type="submit">Login</button>
    </form>

    <LandingPage :username="username" v-show="isLoggedIn"/>

  </div>
</template>

<style scoped>

</style>