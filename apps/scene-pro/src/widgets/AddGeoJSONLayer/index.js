import { Button, Space } from 'antd';
import useLayer from './useLayer';

const AddGeoJSONLayer = () => {
  const { add, remove } = useLayer();
  return (
    <Space>
      <Button onClick={add}>加载图层</Button>
      <Button onClick={remove}>卸载图层</Button>
    </Space>
  );
};

export default AddGeoJSONLayer;
