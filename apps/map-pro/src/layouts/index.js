import RouteMenu from '@/components/RouteMenu';
import User from '@/components/User';
import Map from '@/widgets/Map';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import ZoomVM from '@arcgis/core/widgets/Zoom/ZoomViewModel.js';
import useViewStore from '@chu/store/useViewStore';
import Toolbar from '@chu/ui/Toolbar';
import { Button, Flex, Layout, Space, Typography } from 'antd';
import { Outlet } from 'umi';
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
                name: 'zoomIn',
                tooltip: '放大',
                icon: <PlusOutlined />,
                onClick: () => new ZoomVM({ view }).zoomIn(),
              },
              {
                name: 'zoomOut',
                tooltip: '缩小',
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
