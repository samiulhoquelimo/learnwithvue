<script setup>

import ListItems from "@/Component/ListItems.vue";

const props = defineProps({data: Object})
const data = props.data

const headers = [
    {text: "Name", value: "name"},
    {text: "Email", value: "email"},
];

</script>

<template>
    <ListItems :headers="headers" :items="data"/>
</template>

<style scoped>

</style>
