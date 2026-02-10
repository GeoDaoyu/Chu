import LayerList from '@chu/widgets/LayerList';
import Legend from '@chu/widgets/Legend';
import AddGeoJSONLayer from '@/widgets/AddGeoJSONLayer';

export default [
  {
    title: '图层列表',
    component: <LayerList />,
    position: 'right',
  },
  {
    title: '图例',
    component: <Legend />,
    position: 'right',
  },
  {
    title: '地震服务',
    component: <AddGeoJSONLayer />,
    position: 'right',
  },
];
