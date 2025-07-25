import { layerControl } from '@chu/middleware';
import { layerTreeStoreCreator, withMiddlewares } from '@chu/store';
import { Tree } from 'antd';
import { useMemo } from 'react';

const LayerTree = ({ treeData, getLayerInfo }) => {
  const useLayerTreeStore = useMemo(
    () => withMiddlewares(layerTreeStoreCreator, [layerControl(getLayerInfo(treeData))]),
    [treeData, getLayerInfo],
  );
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  return <Tree checkable onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} />;
};

export default LayerTree;
