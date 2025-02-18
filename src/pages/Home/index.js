import AddGeoJSONLayer from '@/components/AddGeoJSONLayer';
import SideCollapse from '@/components/SideCollapse';
import styles from './index.less';

const items = [
  {
    key: 'x',
    label: '添加图层',
    children: <AddGeoJSONLayer />,
  },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SideCollapse items={items} />
    </div>
  );
};

export default HomePage;
