import { createRouter, createWebHistory } from 'vue-router'


import DasboradP from '@/views/DasboradP.vue'
import LoginDas from '@/views/LoginDas.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginDas
    },
    {
      path: '/home',
      name: 'home',
      component: DasboradP,
      // children: [
      //   {
      //     path: 'users',
      //     component: PageAdmin
      //   },
      //   {
      //     path: 'settings',
      //     component: PageSettings
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
