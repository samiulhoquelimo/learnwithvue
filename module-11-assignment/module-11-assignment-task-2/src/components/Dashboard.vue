<script setup>
import {authStore} from "../store/authStore.js";

const auth = authStore()

const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  auth.logout()
  location.reload()
}
</script>

<template>
  <h1 class="text-2xl mb-3">This is home page</h1>

  <FormKit
      type="form"
      id="registration-example"
      :form-class="!auth.isAuthenticated ? 'hide' : 'show'"
      submit-label="Register"
      @submit="submitHandler"
      :actions="false"
      #default="{ value }"
  >
    <h1>Logout</h1>
    <hr/>
    <FormKit
        type="submit"
        label="Logout"
    />
    <!--    <pre wrap>{{ value }}</pre>-->
  </FormKit>

</template>

<style></style>