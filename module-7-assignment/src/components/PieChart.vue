<script setup>

import {onBeforeUnmount, onMounted, ref} from "vue";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import {Pie} from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = ref({
  labels: [],
  datasets: [
    {
      backgroundColor: [],
      data: []
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}

onMounted(() => {
  console.log('Pie Chart onMounted')
  data.value = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }
})

onBeforeUnmount(() => {
  console.log('Pie Chart onBeforeUnmount')
  ChartJS.unregister(ArcElement, Tooltip, Legend)
})

</script>

<template>
  <Pie :data="data" :options="options"/>
</template>

<style scoped>

</style>