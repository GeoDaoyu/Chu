import { Button, Space } from 'antd';
import styles from './index.less';
import { useModel } from '@umijs/max';

const AddGeoJSONLayer = () => {
  const add = () => {
    setLayerList(['0f4621']);
  };
  const remove = () => {
    setLayerList([]);
  };
  const { setLayerList } = useModel('layers');

  return (
    <div className={styles.text}>
      <Space>
        <Button onClick={add}>加载图层</Button>
        <Button onClick={remove}>卸载图层</Button>
      </Space>
    </div>
  );
};

export default AddGeoJSONLayer;
