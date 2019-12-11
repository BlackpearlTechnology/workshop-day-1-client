import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/test',
    name: 'test',
    component: Test
  }

  /* Add your routes here */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
