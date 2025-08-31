import {
  LineOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import DirectLineMeasurement2D from '@chu/widgets/DirectLineMeasurement2D';
import AreaMeasurement2D from '@chu/widgets/AreaMeasurement2D';

const dataSource = [
  {
    key: 'DirectLineMeasurement2D',
    title: '距离测量',
    avatar: <LineOutlined />,
    description: '我是距离测量',
    component: <DirectLineMeasurement2D />,
  },
  {
    key: 'AreaMeasurement2D',
    title: '面积测量',
    avatar: <BorderOutlined />,
    description: '我是面积测量',
    component: <AreaMeasurement2D />,
  },
];

export default dataSource;
