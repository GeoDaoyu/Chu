import { deleteAuthority } from '@/utils/authority';
import { history, useModel } from '@umijs/max';
import { Button, Space } from 'antd';

export default () => {
  const { refresh } = useModel('@@initialState');
  const login = () => {
    history.push('/login');
  };
  const logout = () => {
    deleteAuthority();
    refresh();
  };

  return (
    <div>
      <Space>
        <Button onClick={login}>去登录</Button>
        <Button onClick={logout}>登出</Button>
      </Space>
    </div>
  );
};
