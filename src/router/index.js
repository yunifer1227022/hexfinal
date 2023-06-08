import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path:'/login',
      name:'login',
      component:() => import('../views/Login.vue'),
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:() => import('../views/Dashboard.vue'),
      children: [
        {
          path: 'products',
          component:() => import('../views/Products.vue'),
        }
      ]
    },

  ],
})

export default router
