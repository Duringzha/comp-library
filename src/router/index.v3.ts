import { createRouter, createWebHistory } from 'vue-router3'
import { setDocumentTitle, webTitle } from '@/utils/util'
import routes from './router.config.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) { // 滚动行为
    console.log(to, from, savedPosition);
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})
// 注册全局前置守卫
router.beforeEach((to, from) => {
  console.log(to, from);
  const domTitle = to.meta.title + ' ' + String(to.name) + ' - ' + webTitle
  setDocumentTitle(domTitle)
})

export default router
