import { Button, Space } from 'antd';
import styles from './index.less';
import useLayer from './useLayer';

export default () => {
  const { add, remove } = useLayer();
  return (
    <div className={styles.text}>
      <Space>
        <Button onClick={add}>加载图层</Button>
        <Button onClick={remove}>卸载图层</Button>
      </Space>
    </div>
  );
};
