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
    path: '/login',
    component: './Login',
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
