import { defineStore } from "pinia";
import axios from "axios";
export const useStore = defineStore("shop", {
  state: () => {
    return {
      items: [],
      cartItems: [],
    };
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getCartItems(state) {
      return state.cartItems;
    },
    // getTotalPrice(state) {
    //   return state.cartItems.forEach(item =>{
    //     let total = 0
    //      total += item.quantity * item.price
    //   } );
    // },
  },
  actions: {
    // fetchData
    async fetchData() {
      const getCashedItems = JSON.parse(localStorage.getItem("items"));
      const getCashedCartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (getCashedCartItems.length) {
        this.cartItems = getCashedCartItems;
      }
      if (getCashedItems.length) {
        this.items = getCashedItems;
      } else {
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products?limit=11"
          );
          this.items = await response.data;
          localStorage.setItem("items", JSON.stringify(this.items));
        } catch (error) {
          console.log(error);
        }
      }
    },
    // addToCart
    addToCart(item) {
      this.cartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    // removeFromCart
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id != itemId);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    test() {
      console.log("commited test");
    },
  },
});
