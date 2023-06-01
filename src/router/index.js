import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
// import LogIn from '../views/LogIn.vue';
// import Dashboard from '../views/Dashboard.vue';

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
    }
  ],
})

export default router
