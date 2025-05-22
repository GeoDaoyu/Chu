export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
  },
  {
    name: '资源目录',
    path: '/resource',
    component: '@/pages/Resource',
  },
  {
    name: '空间分析',
    path: '/analysis',
    component: '@/pages/Analysis',
  },
  {
    name: '仿真特效',
    path: '/effect',
    component: '@/pages/Effect',
  },
  {
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    path: '/sso',
    component: './SSO',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
];
