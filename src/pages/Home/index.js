import Guide from '@/components/Guide';
import { deleteAuthority } from '@/utils/authority';
import { PageContainer } from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Button, Space } from 'antd';
import styles from './index.less';

const HomePage = () => {
  const { refresh, initialState } = useModel('@@initialState');
  const { name } = initialState;
  const login = () => {
    history.push('/login');
  };
  const logout = () => {
    deleteAuthority();
    refresh();
  };
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={name} />
        <Space>
          <Button onClick={login}>去登录</Button>
          <Button onClick={logout}>登出</Button>
        </Space>
      </div>
    </PageContainer>
  );
};

export default HomePage;
