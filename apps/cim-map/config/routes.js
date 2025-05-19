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
