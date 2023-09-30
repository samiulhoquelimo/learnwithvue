<script setup>
import {authStore} from "../store/authStore.js";

const auth = authStore()
console.log('isAuthenticated: ' + auth.isAuthenticated)
const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  auth.authenticate()
  console.log('isAuthenticated: ' + auth.isAuthenticated)
}

</script>
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
        account</h2>
    </div>

    <FormKit
        type="form"
        id="registration-example"
        submit-label="Register"
        :form-class="auth.isAuthenticated ? 'hide' : 'show'"
        @submit="submitHandler"
        :actions="false"
        #default="{ value }"
    >
      <h1>Login</h1>
      <hr/>
      <FormKit
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          help="What email should we use?"
          validation="required|email"
      />
      <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
          placeholder="Your password"
          help="Choose a password"
      />

      <FormKit
          type="submit"
          label="Login"
      />

      <div>
        <p class="mt-10 text-center text-sm text-gray-500">
          Not an user, Please register.
          {{ ' ' }}
          <a href="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</a>
        </p>
      </div>
      <!--    <pre wrap>{{ value }}</pre>-->
    </FormKit>

    <div v-if="auth.isAuthenticated">
      <h2>Submission successful!</h2>
      <p class="mt-10 text-center text-sm text-gray-500">
        You are now logged in.
        {{ ' ' }}
        <a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Dashboard</a>
      </p>
    </div>

  </div>
</template>

<style></style>