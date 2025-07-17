import { layerControl } from '@chu/middleware';
import { layerTreeStoreCreator, withMiddlewares } from '@chu/store';
import { Tree } from 'antd';
import { useEffect } from 'react';

const useLayerTreeStore = withMiddlewares(layerTreeStoreCreator, [layerControl]);

const LayerTree = ({ treeData }) => {
  const { checkedKeys, setCheckedKeys, setTreeData } = useLayerTreeStore();

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  useEffect(() => {
    setTreeData(treeData);
  }, [treeData, setTreeData]);

  return <Tree checkable onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} />;
};

export default LayerTree;
