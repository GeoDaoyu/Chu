import { history, useModel } from '@umijs/max';
import { Button, Space } from 'antd';
import { deleteAuthority } from '@/utils/authority';
import styles from './index.less';

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
    <div className={styles.container}>
      <Space>
        <Button type="link" onClick={login}>
          去登录
        </Button>
        <Button type="link" onClick={logout}>
          登出
        </Button>
      </Space>
    </div>
  );
};
