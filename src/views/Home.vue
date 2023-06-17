<template>
  <div class="container my-5">
    <div v-if="getItems.length" class="row">
      <div
        v-for="item of getItems"
        class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-stretch"
      >
        <div :key="item.id" class="card pt-2 m-3 text-center" style="width: 18rem" :class="{ active: checkItemExist(item.id)}">
          <img
            :src="item.image"
            class="card-img-top"
            alt="img"
            height="120"
            width="100"
            loading="lazy"
          />
          <div class="card-body">
            <p class="card-text">{{ item.category }}</p>
            <h5 class="card-title">$ {{ item.price.toFixed(0) }}</h5>
            <button v-if="!checkItemExist(item.id)" @click="addItem(item)" class="btn btn-primary rounded">
              Add To Bag
            </button>
            <a v-else @click="removeFromCart(item.id)" class="text-reset rounded" role="button">
              remove from Bag
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- loader -->
    <div v-else class="row position-fixed">
      <div class="spinner-grow m-auto text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script setup>
// imports
import { useStore } from "../store/index.js";
import { ref, onMounted, computed, inject } from "vue";
import { toast } from 'vue3-toastify';
const store = useStore();
// init data
onMounted(() => {
  store.fetchData();
});
// get Data
const getItems = computed(() => {
  return store.getItems;
});
const checkItemExist = (itemId) =>{
  return store.cartItems.find(item => item.id == itemId);
}
const addItem = (item) => {
  item.quantity = 1
  store.addToCart(item)
  toast.success('item has been added');
}
// remove
const Swal = inject('$swal')
const removeFromCart = (itemId) => {
    Swal.fire({
    icon: 'warning',
    text: 'your about to delete an item',
    confirmButtonText: 'Delete'
  }).then(()=>{
    store.removeFromCart(itemId)
    toast.error('item has been removed');
  })
}
</script>
<script setup></script>
<style scoped>
.position-fixed{
  top: 50%;
  left: 50%;
}
.active{
  border: 2px solid #e3ca2cbd;
}
</style>
