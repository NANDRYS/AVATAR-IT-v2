import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/freelancer',
      name: 'freelancer',
      component: () => import('../views/FreelancerView.vue')
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: () => import('../views/AuthorizationView.vue')
    }
  ]
})

export default router
