<script setup>
import {reactive, ref} from "vue";

const isLogin = ref(false)
const user = ref({email: "", password: ""})
const users = reactive([
  {email: "admin@ostad.app", password: "123456"}
])

function isUserExist() {
  const findUser = users.filter((item) => user.value.email === item.email && user.value.password === item.password)
  return findUser.length > 0
}

function register() {
  if (!isUserExist()) {
    const newUser = {email: user.value.email, password: user.value.password}
    users.push(newUser)
    isLogin.value = true
  }
}

function login() {
  if (user.value.email === '' || user.value.password === '') {
    alert('Please fill up fields to continue')
    return
  }

  if (isUserExist() === true) {
    isLogin.value = true
  } else {
    alert('You are not a user. Please register to continue.')
  }
}

function logout() {
  console.log('logout')
  user.value.email = ""
  user.value.password = ""
  isLogin.value = false
}

</script>

<template>
  <section class="flex h-screen w-full">
    <div class="w-1/2"
         style="background-image: url(https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80); background-repeat: no-repeat; background-size: cover;">
      <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">Module 6 Assigment</h1>
    </div>

    <div v-show="!isLogin" class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
      <h2 class="mb-5 text-xl">Login or register</h2>
      <h2 class="mb-5 text-xl">{{ users }}</h2>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
                v-model="user.email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="email">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
                v-model="user.password"
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>
          <div class="flex items-center justify-between">
            <button
                @click="login()"
                class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
              Sign In
            </button>
            <a @click="register()"
               class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800" href="#">
              Or Register
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Ostad. All rights reserved.
        </p>
      </div>
    </div>

    <div v-show="isLogin" class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
      <h2 class="mb-5 text-xl">Welcome</h2>
      <h2 class="mb-5 text-xl">{{ users }}</h2>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="mb-5 text-2xl mt-10 ml-10">Thank you for login</h1>
            </div>
            <button @click="logout()"
                    class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
              Logout
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Ostad. All rights reserved.
        </p>
      </div>
    </div>

  </section>
</template>

<style scoped></style>
