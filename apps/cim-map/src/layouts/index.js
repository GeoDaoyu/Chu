import { useViewStore } from '@chu/store';
import { Button, Flex, Layout, Space, Typography } from 'antd';
import { Outlet } from 'umi';
import RouteMenu from '@/components/RouteMenu';
import User from '@/components/User';
import Map from '@/widgets/Map';
import { Toolbar } from '@chu/ui';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ZoomVM from '@arcgis/core/widgets/Zoom/ZoomViewModel.js';
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
          <Toolbar
            dataSource={[
              {
                key: 'zoomIn',
                icon: <PlusOutlined />,
                onClick: () => new ZoomVM({ view }).zoomIn(),
              },
              {
                key: 'zoomOut',
                icon: <MinusOutlined />,
                onClick: () => new ZoomVM({ view }).zoomOut(),
              },
            ]}
          />
        </div>
      </Content>
    </Layout>
  );
}
