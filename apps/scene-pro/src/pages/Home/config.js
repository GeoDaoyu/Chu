import CoordinateConversion from '@chu/widgets/CoordinateConversion';
import Sketch from '@chu/widgets/Sketch';
import ZoomKeeper from '@chu/widgets/ZoomKeeper';

export default (props) => [
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
    component: <CoordinateConversion {...props} />,
    position: 'left',
  },
  {
    title: '面板四',
    component: <Sketch {...props} />,
    position: 'right',
  },
];
