import useViewStore from '@chu/store/useViewStore';
import { Layout } from 'antd';
import { Outlet } from 'umi';
import RouteMenu from '@/components/RouteMenu';
import User from '@/components/User';
import Map from '@/widgets/Map';
import BasemapToggle from '@chu/widgets/BasemapToggle';
import BaseHeader from './components/BaseHeader';
import styles from './index.less';

const { Content } = Layout;

export default function BasicLayout() {
  const view = useViewStore((state) => state.view);

  return (
    <Layout>
      <BaseHeader>
        <User />
      </BaseHeader>
      <Content>
        <div className={styles.container}>
          <Map />
          {view && <Outlet />}
          <RouteMenu />
          <div className={styles.basemap}>
            <BasemapToggle nextBasemap="streets-3d" />
          </div>
        </div>
      </Content>
    </Layout>
  );
}
