import CoordinateConversion from '@chu/widgets/CoordinateConversion';
import Sketch from '@chu/widgets/Sketch';
import ZoomKeeper from '@chu/widgets/ZoomKeeper';
import AddGeoJSONLayer from '@/widgets/AddGeoJSONLayer';
import Identify from '@chu/widgets/Identify';

export default (props) => [
  {
    title: '面板一',
    component: <Identify {...props} />,
    position: 'left',
  },
  {
    title: '面板二',
    component: <ZoomKeeper {...props} />,
    position: 'left',
  },
  {
    title: '面板三',
    component: <CoordinateConversion {...props} />,
    position: 'left',
  },
  {
    title: '面板四',
    component: <Sketch {...props} />,
    position: 'right',
  },
  {
    title: '面板五',
    component: <AddGeoJSONLayer {...props} />,
    position: 'right',
  },
];
