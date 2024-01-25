import { isVue2 } from 'vue-demi';
import GlobalLayout from '@/layout/index.vue';
import routers from './modules/index';

export default [
  {
    path: '/',
    name: 'Index',
    component: GlobalLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: '首页' },
        component: isVue2 ? () => import('@/views/guild/Home.v2.vue') : () => import('@/views/guild/Home.v3.vue')
      },
      ...routers.routers
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: { title: 'NotFound'},
    component: () => import('@/views/guild/NotFound.vue')
  }
];