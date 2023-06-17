import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
// toast
import 'vue3-toastify/dist/index.css';
import Vue3Toastify from 'vue3-toastify';
// alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(Vue3Toastify,{
    position: "top-center",
    theme: "colored",
    autoClose: 1000
});
app.use(createPinia())
app.use(VueSweetalert2);
app.use(router)
app.mount('#app')
