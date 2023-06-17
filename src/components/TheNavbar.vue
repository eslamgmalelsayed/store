<template>
 <div>
     <nav class="navbar navbar-expand bg-dark">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link text-white" aria-current="page"  :to="{name : 'Home'}">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-white"  :to="{name : 'About'}">SHOPPING CART ({{store.cartItems.length}})</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
 </div>
</template>

<script setup>
import { useStore } from "../store/index.js";
import { ref, computed } from "vue";
const store = useStore()
// get cartItems from cash
// const getCartItems = computed(() => {
//   debugger
//   const getCashedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   if (getCashedCartItems.length) {
//     return getCashedCartItems;
//   } else {
//     return store.getCartItems;
//   }
// });
</script>
<style scoped>
  .router-link-exact-active{
  color: green !important;
  }
</style>
