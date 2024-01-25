import HelloWorld from './helloWorld';
import Header from './header';

import {
  dateFormat,
  requestAnimationFrame,
  cancelAnimationFrame,
  rafTimeout,
  cancelRaf,
  throttle,
  debounce,
  add,
  downloadFile,
  formatNumber
} from './utils'

const components = [
  HelloWorld,
  Header
];

// 定义 install 方法
const install = (app: any): void => {
  // 遍历注册所有组件
  components.forEach(component => app.component(component.name as string, component))
}

export {
  dateFormat,
  requestAnimationFrame,
  cancelAnimationFrame,
  rafTimeout,
  cancelRaf,
  throttle,
  debounce,
  add,
  downloadFile,
  formatNumber
}

export {
  HelloWorld,
  Header
}

const eliComp = {
  install
}
export default eliComp