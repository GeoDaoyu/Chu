import {
  DashboardOutlined,
  DatabaseOutlined,
  ExperimentOutlined,
  FieldTimeOutlined,
  ForkOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import Extent from '@arcgis/core/geometry/Extent';
import ExtentAndRotationGeoreference from '@arcgis/core/layers/support/ExtentAndRotationGeoreference';
import VideoElement from '@arcgis/core/layers/support/VideoElement';
import { MediaMixin, Weather } from '@chu/widgets';

const element = new VideoElement({
  video:
    'https://arcgis.github.io/arcgis-samples-javascript/sample-data/media-layer/videos/hurricanes_aerosol-aug.mp4',
  georeference: new ExtentAndRotationGeoreference({
    extent: new Extent({
      xmin: -150,
      ymin: 1,
      xmax: 20,
      ymax: 80,
      spatialReference: {
        wkid: 4326,
      },
    }),
  }),
});

const mediaLayerConfig = {
  source: [element],
  title: '2017 Hurricanes and Aerosols Simulation',
};

const dataSource = (props) => [
  {
    key: '1',
    title: '视频融合',
    avatar: <PlayCircleOutlined />,
    component: <MediaMixin mediaLayerConfig={mediaLayerConfig} {...props} />,
  },
  {
    key: '2',
    title: '天气',
    avatar: <DashboardOutlined />,
    component: <Weather {...props} />,
  },
  {
    key: '3',
    title: '交通流量',
    avatar: <DatabaseOutlined />,
    component: undefined,
  },
  {
    key: '4',
    title: '积水仿真',
    avatar: <ExperimentOutlined />,
    component: undefined,
  },
  {
    key: '5',
    title: '风场',
    avatar: <FieldTimeOutlined />,
    component: undefined,
  },
  {
    key: '6',
    title: '洋流',
    avatar: <ForkOutlined />,
    component: undefined,
  },
];
export default dataSource;
