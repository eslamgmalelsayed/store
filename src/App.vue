<template>
  <div id="app">
    <TheNavbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import TheNavbar from './components/TheNavbar.vue'
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  *{
    text-transform: capitalize;
    font-family: 'Roboto Mono', monospace;
  }
  img{
  object-fit: contain;
  }
</style>
