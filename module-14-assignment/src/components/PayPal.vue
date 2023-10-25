<script setup>
  window.paypalLoadScript({clientId: "test"}).then((paypal) => {
    paypal.Buttons().render("#paypal-buttons");
  });
</script>

<template>
  <div id="paypal-buttons"></div>
</template>

<style scoped>

</style>