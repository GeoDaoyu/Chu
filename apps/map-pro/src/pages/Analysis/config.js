import { LineOutlined, BorderOutlined } from '@ant-design/icons';
import DistanceMeasurement2D from '@chu/widgets/DistanceMeasurement2D';
import AreaMeasurement2D from '@chu/widgets/AreaMeasurement2D';
import Swipe from '@chu/widgets/Swipe';

const dataSource = [
  {
    key: 'DirectLineMeasurement2D',
    title: '距离测量',
    avatar: <LineOutlined />,
    description: '我是距离测量',
    component: <DistanceMeasurement2D />,
  },
  {
    key: 'AreaMeasurement2D',
    title: '面积测量',
    avatar: <BorderOutlined />,
    description: '我是面积测量',
    component: <AreaMeasurement2D />,
  },
  {
    key: 'Swipe',
    title: '卷帘',
    avatar: <BorderOutlined />,
    description: '我是卷帘',
    component: <Swipe />,
  },
];

export default dataSource;
