<template>
  <img class="mt-5" src="../../public/NotFound.webp" alt="NotFound" />
  <router-link @click="$router.go(-1)" class="text-dark mt-3" to="">GO Back</router-link>
</template>
<script setup>
    
</script>
<style scoped>
    *{
        display: block;
        text-align: center;
        font-weight: bold;
    }
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
</style>
