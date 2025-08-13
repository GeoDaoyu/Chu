import { EditOutlined, RedoOutlined, SunOutlined, StockOutlined } from '@ant-design/icons';
import Daylight from '@chu/widgets/Daylight';
import LineOfSight from '@chu/widgets/LineOfSight';
import ElevationProfile from '@chu/widgets/ElevationProfile';

const dataSource = [
  {
    key: 'Daylight',
    title: '日照分析',
    avatar: <SunOutlined />,
    description: '我是日照分析',
    component: <Daylight />,
  },
  {
    key: 'EditOutlined',
    title: '视线分析',
    avatar: <EditOutlined />,
    description: '我是视线分析',
    component: <LineOfSight />,
  },
  {
    key: 'RedoOutlined',
    title: '视域分析',
    avatar: <RedoOutlined />,
    description: '我是视域分析',
    component: undefined,
  },
  {
    key: 'ElevationProfile ',
    title: '等高线分析',
    avatar: <StockOutlined />,
    description: '我是等高线分析',
    component: <ElevationProfile />,
  },
];
export default dataSource;
