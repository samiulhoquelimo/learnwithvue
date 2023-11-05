<script setup>

const props = defineProps({headers: Object, items: Object})
const {headers, items} = props

</script>
<template>
    <EasyDataTable :headers="headers" :items="items"/>
</template>

<style scoped>

</style>
