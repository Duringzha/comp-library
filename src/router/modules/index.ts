const modules:Object = import.meta.glob('./*.ts');
const menus:Array<Object> = [];
let routers:Array<Object> = [];
const importArr:Array<Function> = [];
Object.keys(modules).forEach((key:String) => {
  importArr.push(modules[key]());
});
await Promise.all(importArr).then(res => {
  res.forEach((module:Object) => {
    let item:Object = {
      ...module.default
    };
    menus.push(item);
    routers = routers.concat(item.router);
  });
});

export default {
  menus,
  routers
};
