import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
const About = () => import('../views/About.vue')
const NotFound = () => import('../views/NotFound.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound
  },
]
const router = createRouter({
  history : createWebHashHistory(),
  routes
})
export default router