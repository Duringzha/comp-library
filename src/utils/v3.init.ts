import { createApp as Vue3 } from 'vue3';
import router3 from '../router/index.v3.ts';
import 'element-plus/dist/index.css';

import App from '../App.vue';
import eliComp from '../../packages'

async function v3Init() {
  const app = Vue3(App);
  app.use(router3);
  await import('element-plus').then(model => {
    app.use(model);
  });
  await import('@element-plus/icons-vue').then(model => {
    for (const [key, component] of Object.entries(model)) {
      app.component(key, component)
    }
  });
  app.use(eliComp);
  app.mount('#app');
}

export {
  v3Init
}