import User from '@/components/User';
import useViewStore from '@/stores/useViewStore';
import Map from '@/widgets/Map';
import { Layout } from 'antd';
import { Outlet } from 'umi';
import styles from './index.less';

const { Header, Content } = Layout;

export default function BasicLayout() {
  const view = useViewStore((state) => state.view);

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
