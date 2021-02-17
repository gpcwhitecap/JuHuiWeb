import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/home/home.vue';
import Mall from '../view/mall/mall.vue';

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/mall',
      component: Mall,
    },
  ],
});

export default router;
