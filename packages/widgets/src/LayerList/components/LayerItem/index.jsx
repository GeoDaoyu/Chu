import { Flex, Space, Tooltip, Slider, Typography } from 'antd';
import styles from './index.less';
import { useViewStore } from '@chu/store';
import { useDrag, useDrop } from 'react-dnd';
import { useState } from 'react';
import useLayerTreeStore from '@chu/store/useLayerTreeStore';
import { goToFullExtent } from '@chu/lib';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  GlobalOutlined,
  CloseOutlined,
  HolderOutlined,
} from '@ant-design/icons';
import { isEmpty } from 'ramda';

const { Text } = Typography;

const LayerItem = ({ id, title, index, moveLayer }) => {
  const view = useViewStore((state) => state.view);
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();
  const [visible, setVisible] = useState(true);

  const visibleChange = (checked) => {
    const layer = view.map.findLayerById(id);
    if (layer) layer.visible = checked;
    setVisible(checked);
  };

  const opacityChange = (value) => {
    const layer = view.map.findLayerById(id);
    if (layer) layer.opacity = value;
  };

  const removeLayer = () => {
    // 如果checkedKeys，判定为没有使用checkedKeys来控制图层加载，直接通过map移除图层
    if (isEmpty(checkedKeys)) {
      const layer = view.map.findLayerById(id);
      view.map.remove(layer);
    } else {
      setCheckedKeys(checkedKeys.filter((v) => v !== id));
    }
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'LAYER',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'LAYER',
    hover: (draggedItem, monitor) => {
      if (!monitor.isOver()) return;

      if (draggedItem.index !== index) {
        moveLayer(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drop} className={styles.card} style={{ opacity }}>
      <Flex justify="space-between" align="center">
        <Space>
          <HolderOutlined className={styles.holder} ref={drag} />
          <Text>{title}</Text>
        </Space>
        <Space className={styles.buttons}>
          <GlobalOutlined onClick={() => goToFullExtent(view, id)} />
          {visible ? (
            <EyeOutlined onClick={() => visibleChange(false)} />
          ) : (
            <EyeInvisibleOutlined onClick={() => visibleChange(true)} />
          )}
          <Tooltip title="移除">
            <CloseOutlined onClick={() => removeLayer()} />
          </Tooltip>
        </Space>
      </Flex>
      <Flex>
        <Slider
          className={styles.slider}
          defaultValue={1}
          max={1}
          step={0.1}
          onChange={opacityChange}
        />
      </Flex>
    </div>
  );
};

export default LayerItem;
