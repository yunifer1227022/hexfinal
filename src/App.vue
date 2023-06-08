<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import 'assets/styles/scss.module.scss'
</script>

<template>  
  <header>
    <div>
      <nav>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "./assets/all.scss";

</style>
