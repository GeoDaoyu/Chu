import { EditOutlined, RedoOutlined, SunOutlined, StockOutlined } from '@ant-design/icons';
import { Daylight, LineOfSight, ElevationProfile } from '@chu/widgets';

const dataSource = (props) => [
  {
    key: 'Daylight',
    title: '日照分析',
    avatar: <SunOutlined />,
    description: '我是日照分析',
    component: <Daylight {...props} />,
  },
  {
    key: 'EditOutlined',
    title: '视线分析',
    avatar: <EditOutlined />,
    description: '我是视线分析',
    component: <LineOfSight {...props} />,
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
