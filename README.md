# Elimen-components
基于vue2.x构建的兼容vue3.x的公共组件库

## 安装与使用
安装时请确保npm源为公司私有库地址
### 开发环境
- `npm install --force`
- vue2.x环境运行命令：`npm run dev:2`
- vue3.x环境运行命令：`npm run dev:3`
- `npm run build`自动构建vue2.x及vue3.x组件库

### 生产环境
- `npm install elimen-components`
- vue2.x环境中，全局引入`import elimenComponents from 'elimen-components/v2'`，再使用`Vue.use(elimenComponents)`即可；
- vue3.x环境中，全局引入`import elimenComponents from 'elimen-components/v3'`，再使用`app.use(elimenComponents)`即可；
- 亦可按需引入，如`import { name } from 'elimen-components/v*`;
- 按需引入和全局引入，均需要在`main.ts/main.js`中引入样式`import 'elimen-components/css'`;

## 注意事项
- 使用命令`npm install --force`进行安装，否则会因依赖的版本不支持而出错；
- 安装时出现`vue-template-compiler`版本不符的错误时，请使用命令`npm install vue@2.x.x vue-template-compiler@2.x.x`，重新安装vue2及vue-template-compiler，统一版本号；
- 安装后报`lib`文件夹相关的错误，可忽略，运行`npm run build`命令即可；
- 组件库内vue2.x使用的是element-ui，vue3.x使用的是element-plus，两者不互通不兼容，在编写组件时需注意；
- 此组件库仅用于vue2.x向vue3.x升级的过渡阶段，升级完成后弃用
