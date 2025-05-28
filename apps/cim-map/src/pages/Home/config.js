import { Sketch, ZoomKeeper } from '@chu/widgets';
import AddGeoJSONLayer from '@/widgets/AddGeoJSONLayer';

export default props => [
  {
    title: '面板一',
    component: undefined,
    position: 'left',
  },
  {
    title: '面板二',
    component: <ZoomKeeper {...props} />,
    position: 'left',
  },
  {
    title: '面板三',
    component: undefined,
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
