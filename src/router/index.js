import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home.vue'
import login from '@/pages/login.vue'
import registration from '@/pages/registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/registration',
    name: 'registration',
    component: registration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
