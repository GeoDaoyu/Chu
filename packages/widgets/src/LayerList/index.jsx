import LayerItem from './components/LayerItem';
import { useEffect, useState, useCallback } from 'react';
import { watch } from '@arcgis/core/core/reactiveUtils.js';
import styles from './index.less';
import { useViewStore } from '@chu/store';
import { Empty } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function LayerList() {
  const view = useViewStore((state) => state.view);
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    const initialLayers = view.map.layers
      .filter(({ listMode }) => listMode !== 'hide')
      .map(({ id, title, visible, type }) => ({ id, title, visible, type }))
      .toArray()
      .reverse();
    setLayers(initialLayers);

    const handleLayerChange = watch(
      () =>
        view.map.layers
          .filter(({ listMode }) => listMode !== 'hide')
          .map(({ id, title, visible, type }) => ({ id, title, visible, type }))
          .toArray()
          .reverse(),

      (v) => {
        setLayers(v);
      },
    );

    return () => {
      handleLayerChange?.remove();
    };
  }, [view]);

  const moveLayer = useCallback(
    (fromIndex, toIndex) => {
      const layer = view.map.layers.at(fromIndex);
      view.map.reorder(layer, toIndex);
    },
    [view],
  );

  if (layers.length < 1) return <Empty description={false} />;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.content}>
        {layers.map(({ id, title, type }, index) => (
          <LayerItem
            key={id}
            id={id}
            title={title}
            type={type}
            index={index}
            moveLayer={moveLayer}
          />
        ))}
      </div>
    </DndProvider>
  );
}

export default LayerList;
