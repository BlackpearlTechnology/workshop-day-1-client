import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import kyle from '../views/kyle.vue'
import CJ from '../views/CJ.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kyle',
    name: 'kyle-vue',
    component: kyle
  },
  {
    path: '/cj',
    name: 'cjview',
    component: CJ
  }

  /* Add your routes here */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
