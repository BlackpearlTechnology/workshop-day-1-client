import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daun from '../views/Daun.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/daun-view',
    name: 'daun-view',
    component: Daun
  }

  /* Add your routes here */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
