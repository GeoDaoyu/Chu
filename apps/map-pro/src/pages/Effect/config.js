import { PlayCircleOutlined } from '@ant-design/icons';
import Extent from '@arcgis/core/geometry/Extent';
import ExtentAndRotationGeoreference from '@arcgis/core/layers/support/ExtentAndRotationGeoreference';
import VideoElement from '@arcgis/core/layers/support/VideoElement';
import MediaMixin from '@chu/widgets/MediaMixin';

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

const dataSource = [
  {
    key: '1',
    title: '视频融合',
    avatar: <PlayCircleOutlined />,
    component: <MediaMixin mediaLayerConfig={mediaLayerConfig} />,
  },
];
export default dataSource;
