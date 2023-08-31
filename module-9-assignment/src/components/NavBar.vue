<script setup>
import {Navbar, NavbarCollapse, NavbarLink, NavbarLogo} from 'flowbite-vue'

import {ref} from 'vue';

const categories = ref(null);
fetch('https://basic-blog.teamrabbil.com/api/post-categories')
    .then(response => response.json())
    .then(data => categories.value = data);

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
        <NavbarLink isActive >হোম</NavbarLink>
        <NavbarLink v-for="category in categories" :key="category.id">{{ category.name }}</NavbarLink>
      </NavbarCollapse>
    </template>
  </Navbar>
</template>

<style scoped>

</style>