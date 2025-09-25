import { history, useModel } from '@umijs/max';
import { Dropdown, Avatar, Space } from 'antd';
import { deleteAuthority } from '@/utils/authority';
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import styles from './index.less';

const User = () => {
  const { refresh, initialState } = useModel('@@initialState');
  const { name, role } = initialState;
  const login = () => {
    history.push('/login');
  };
  const logout = () => {
    deleteAuthority();
    refresh();
  };
  const items = [
    {
      key: 'login',
      icon: <LoginOutlined />,
      label: '登录',
      onClick: login,
      role: ['guest'],
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出',
      onClick: logout,
      role: ['admin', 'user'],
    },
  ];

  return (
    <div className={styles.container}>
      <Dropdown
        menu={{
          items: items.filter(({ role: dropdownRole }) => dropdownRole.includes(role)),
        }}
      >
        <Space>
          <Avatar src={<img src="./avatar.png" alt="avatar" />} />
          <span>{name}</span>
        </Space>
      </Dropdown>
    </div>
  );
};

export default User;
