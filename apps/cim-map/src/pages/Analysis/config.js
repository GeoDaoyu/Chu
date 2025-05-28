import { EditOutlined, RedoOutlined, SunOutlined } from '@ant-design/icons';
import { Daylight, LineOfSight } from '@chu/widgets';

const dataSource = props => [
  {
    key: '1',
    title: '日照分析',
    avatar: <SunOutlined />,
    description: '我是日照分析',
    component: <Daylight {...props} />,
  },
  {
    key: '2',
    title: '视线分析',
    avatar: <EditOutlined />,
    description: '我是视线分析',
    component: <LineOfSight {...props} />,
  },
  {
    key: '3',
    title: '视域分析',
    avatar: <RedoOutlined />,
    description: '我是视域分析',
    component: undefined,
  },
];
export default dataSource;
