# 路由

基于Umi的[路由](https://umijs.org/docs/guides/routes)，在`config/routes.js`中配置，如：

```js
export default {
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "首页",
      path: "/home",
      component: "@/pages/Home",
    },
    {
      name: "资源目录",
      path: "/resource",
      component: "@/pages/Resource",
    },
    {
      name: "空间分析",
      path: "/analysis",
      component: "@/pages/Analysis",
    },
    {
      name: "仿真特效",
      path: "/effect",
      component: "@/pages/Effect",
    },
  ],
};
```
