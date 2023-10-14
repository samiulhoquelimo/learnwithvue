<script setup>
import {computed, ref, watch} from "vue";

const userInput = ref({
  name: '',
  email: '',
  dob: '',
  description: '',
  profile: '',
})

const message = ref('')

function getYear(dateStr) {
  let year = ''
  const date = new Date(dateStr)

  if (isNaN(date)) return year

  try {
    year = new Date(dateStr).getFullYear()
  } catch (e) {
    console.log(e)
  }
  return year
}

const birthYear = computed(() => {
  let year = ''
  if (userInput.value.dob) {
    year = getYear(userInput.value.dob)
  }
  return year;
})

const age = computed(() => {
  if (!birthYear.value) return ''
  return new Date().getFullYear() - birthYear.value;
})

watch(age, (newVal, oldVal) => {
  if (newVal == oldVal) return

  if (newVal >= 18) {
    message.value = 'eligible for voting'
  } else {
    message.value = 'not eligible for voting'
  }
})

const imageFile = ref(null);
const imagePreview = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    imageFile.value = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

</script>

<template>

  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="flex flex-col justify-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {{ message }}
        </h1>
        <p v-if="birthYear" class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          You born in {{ birthYear }}
        </p>
        <p v-if="age" class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          You are {{ age }} years old
        </p>
      </div>
      <div>
        <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            User Details
          </h2>
          <form class="mt-8 space-y-6" action="#">
            <div class="flex items-center justify-center">
              <img class="block rounded w-36 h-36" :src="imagePreview?imagePreview:'../../public/profile.svg'"
                   alt="Extra large avatar">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                file</label>
              <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  @change="handleFileUpload" aria-describedby="file_input_help" id="file_input" type="file">
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
                800x400px).</p>
            </div>
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
              <input type="text" name="name" id="name" v-model="userInput.name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="John Doe" required>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" v-model="userInput.email"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="john@doe.com" required>
            </div>
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your date of
                Birth</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </div>
                <!--                <input datepicker datepicker-autohide datepicker-buttons datepicker-format="dd/mm/yyyy" datepicker-title="Your Date of Birth" type="text"
                                       v-model="userInput.dob"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Select date">-->
                <input type="date"
                       v-model="userInput.dob"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Select date">
              </div>
            </div>
            <div>
              <label for="description"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="description" rows="4" v-model="userInput.description"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your description here..."></textarea>
            </div>
            <button type="submit"
                    class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>