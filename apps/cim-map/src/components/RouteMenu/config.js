import {
  AppstoreOutlined,
  MailOutlined,
  ScissorOutlined,
  SettingOutlined,
} from '@ant-design/icons';

// TODO: 从umi route config中获取
// 图标怎么办？
export default [
  {
    label: '首页',
    key: '/home',
    icon: <MailOutlined />,
  },
  {
    label: '资源目录',
    key: '/resource',
    icon: <AppstoreOutlined />,
  },
  {
    label: '空间分析',
    key: '/analysis',
    icon: <ScissorOutlined />,
  },
  {
    label: '仿真特效',
    key: '/effect',
    icon: <SettingOutlined />,
  },
];
