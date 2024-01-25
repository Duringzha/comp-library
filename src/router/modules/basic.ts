const router:Array<any> = [
  {
    path: '/basic/helloworld',
    name: 'basic.HelloWorld',
    meta: { 
      title: '示例组件' 
    },
    component: () => import('@/views/basic/HelloWorld.vue')
  },
];

export default {
  title: '基础组件',
  router
};