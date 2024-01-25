import Vue2 from 'vue2';
import VueRouter from 'vue-router2';
import router from '../router/index.v2.ts';
import 'element-ui/lib/theme-chalk/index.css';

import App from '../App.vue'
import eliComp from '../../packages'

async function v2Init() {
  Vue2.use(VueRouter);
  await import('element-ui').then(model => Vue2.use(model));
  Vue2.use(eliComp)
  new Vue2({
    el: '#app',
    router: router,
    render:h=>h(App)
  });
}

export {
  v2Init
}