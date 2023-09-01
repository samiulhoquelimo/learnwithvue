<script setup>
import {Navbar, NavbarCollapse, NavbarLink, NavbarLogo} from 'flowbite-vue'

import {ref} from 'vue';
import {useRouter} from "vue-router";

const categories = ref(null);
fetch('https://basic-blog.teamrabbil.com/api/post-categories')
    .then(response => response.json())
    .then(data => categories.value = data);

const router = useRouter()
const onClick = (id) => {
  router.push(`/blog/${id}`);
}

</script>

<template>
  <Navbar>
    <template #logo>
      <NavbarLogo alt="Ostad logo"
                  image-url="https://cdn.ostad.app/public/upload/2022-11-27T06-52-05.802Z-logo%20ostad.png">
        <strong class="text-gray-700">Blog</strong>
      </NavbarLogo>
    </template>
    <template #default="{isShowMenu}">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink>হোম</NavbarLink>
        <NavbarLink :on-click="onClick" v-for="category in categories" :key="category.id">
          <a :href="`/blogs/${category.id}`" class="flex items-center">
            {{ category.name }}
          </a>
        </NavbarLink>
      </NavbarCollapse>
    </template>
  </Navbar>
</template>

<style scoped>

</style>