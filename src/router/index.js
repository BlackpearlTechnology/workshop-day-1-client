import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import Daun from '../views/Daun.vue'
=======
import CJ from '../views/CJ.vue'
>>>>>>> 36f27f1e5ceeb9c7d543ebfb1ab2883723eb8603

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
<<<<<<< HEAD
    path: '/daun-view',
    name: 'daun-view',
    component: Daun
=======
    path: '/cj',
    name: 'cjview',
    component: CJ
>>>>>>> 36f27f1e5ceeb9c7d543ebfb1ab2883723eb8603
  }

  /* Add your routes here */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
