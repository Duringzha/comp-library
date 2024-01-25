import { isVue2 } from 'vue-demi';
import './style.css';

if (isVue2) {
  import('./utils/v2.init.ts').then(model => {
    model.v2Init();
  });
} else {
  import('./utils/v3.init.ts').then(model => {
    model.v3Init();
  });
}