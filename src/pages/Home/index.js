import AddGeoJSONLayer from '@/components/AddGeoJSONLayer';
import { deleteAuthority } from '@/utils/authority';
import { history, useModel } from '@umijs/max';
import { Button, Space } from 'antd';
import styles from './index.less';

const HomePage = () => {
  const { refresh } = useModel('@@initialState');
  const { view } = useModel('global');
  const login = () => {
    history.push('/login');
  };
  const logout = () => {
    deleteAuthority();
    refresh();
  };
  console.log(view.ready);
  return (
    <div className={styles.container}>
      <Space>
        <Button onClick={login}>去登录</Button>
        <Button onClick={logout}>登出</Button>
      </Space>
      <AddGeoJSONLayer />
    </div>
  );
};

export default HomePage;
