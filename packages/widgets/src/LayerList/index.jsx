import { watch } from '@arcgis/core/core/reactiveUtils';
import { useViewStore } from '@chu/store';
import useLayerTreeStore from '@chu/store/useLayerTreeStore';
import { List, Typography, Switch, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const LayerList = () => {
  const view = useViewStore((state) => state.view);
  const [dataSource, setDataSource] = useState(view.map.layers.toArray());
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();

  useEffect(() => {
    watch(
      () => view.map.layers.length,
      () => {
        setDataSource(view.map.layers.toArray());
      },
    );
  }, [view]);

  const visibleSwitch = (id, checked) => {
    const layer = view.map.findLayerById(id);
    layer.visible = checked;
  };

  const removeLayer = (id) => {
    setCheckedKeys(checkedKeys.filter((v) => v !== id));
  };

  return (
    <List
      className={styles.list}
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item
          extra={
            <Space>
              <Tooltip title="移除">
                <CloseOutlined onClick={() => removeLayer(item.id)} />
              </Tooltip>
              <Switch
                defaultChecked={item.visible}
                onChange={(checked) => visibleSwitch(item.id, checked)}
              />
            </Space>
          }
        >
          <Typography.Text>{item.title}</Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default LayerList;
