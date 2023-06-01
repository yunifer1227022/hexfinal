<script setup>
import TheWelcome from '../components/TheWelcome.vue'
// import.meta.env.VITE_APP_API
console.log(import.meta.env.VITE_APP_API , import.meta.env.VITE_APP_PATH)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
