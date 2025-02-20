import User from '@/components/User';
import Map from '@/widgets/Map';
import { useModel } from '@umijs/max';
import { Layout } from 'antd';
import { Outlet } from 'umi';
import styles from './index.less';

const { Header, Content } = Layout;

export default function BasicLayout() {
  const { view } = useModel('global');

  return (
    <Layout>
      <Header className={styles.header}>
        <User />
      </Header>
      <Content>
        <div className={styles.container}>
          <Map />
          {view && <Outlet view={view} />}
        </div>
      </Content>
    </Layout>
  );
}
