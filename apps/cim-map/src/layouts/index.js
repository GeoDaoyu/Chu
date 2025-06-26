import { useViewStore } from '@chu/store';
import { Button, Flex, Layout, Space, Typography } from 'antd';
import { Outlet } from 'umi';
import RouteMenu from '@/components/RouteMenu';
import User from '@/components/User';
import Map from '@/widgets/Map';
import styles from './index.less';

const { Title } = Typography;
const { Header, Content } = Layout;
const defaultTitle = 'Chu';

export default function BasicLayout() {
  const view = useViewStore((state) => state.view);

  return (
    <Layout>
      <Header className={styles.header}>
        <Space size="large">
          <Title>{window.appcfg.title || defaultTitle}</Title>
          <Flex gap="small">
            <Button type="primary">外链一</Button>
            <Button type="primary">外链二</Button>
            <Button type="primary">外链三</Button>
            <Button type="primary">外链四</Button>
          </Flex>
        </Space>
        <User />
      </Header>
      <Content>
        <div className={styles.container}>
          <Map />
          {view && <Outlet />}
          <RouteMenu />
        </div>
      </Content>
    </Layout>
  );
}
