<template>
  <div v-for="item of getCartItems">
    <div :key="item.id" class="row align-items-center text-center gy-5 my-5">
      <div class="col-md col-12">
        <img
          height="120"
          width="100"
          loading="lazy"
          :src="item.image"
          alt="item"
        />
      </div>
      <div class="col-md col-12">
        {{ item.title }}
      </div>
      <div class="col-md col-12 text-end">
        <button @click="item.quantity++" class="btn  btn-outline-primary" type="button">+</button> 
              ({{item.quantity}}) 
        <button @click="decreaseQuantity(item.id)" :disabled="item.quantity == 0" class="btn  btn-outline-primary" type="button">-</button> 
        us$ {{ item.price.toFixed(0) }}
      </div>
      <div role="button" class="col-md-auto col-12 text-danger">
        <span title="remove item" @click="removeFromCart(item.id)">&#128465;</span>
      </div>
    </div>
  </div>
  <div class="text-center border-top p-3">
      total {{ totalPrice }}
  </div>
  <template v-if="!getCartItems.length">
    <div class="alert alert-danger text-center my-5 w-50 m-auto" role="alert">
      empty cart! &#128577;
    </div>
  </template>
</template>
<script setup>
import { useStore } from "../store/index.js";
import { ref, computed, watch } from "vue";
import { useRouter } from 'vue-router'

const store = useStore();
const router = useRouter()
let getCashedCartItems = ref([])
 getCashedCartItems.value = JSON.parse(localStorage.getItem("cartItems")) || [];
let getCartItems = computed(() => {
    return store.getCartItems;
});
let removeFromCart = (itemId) =>{
  getCashedCartItems.value.filter(item => item.id != itemId)
  localStorage.setItem("cartItems", JSON.stringify(getCashedCartItems.value));

  store.removeFromCart(itemId)
}
watch(getCashedCartItems, (newValue, oldValue) => {
  if (newValue) {
    getCashedCartItems.value = newValue
  }
})
// increaseQuantity
const increaseQuantity = (itemId) => {
  store.cartItems.map(item =>{item.id == itemId && item.quantity++});
}
// decreaseQuantity
const decreaseQuantity = (itemId) => {
  store.cartItems.map(item =>{item.id == itemId &&  item.quantity--});
}
// get total
let totalPrice = computed(() => {
  return store.cartItems.forEach(item => {
    let total = 0
    total += item.quantity * item.price 
  });
})

</script>
<style scoped>
</style>