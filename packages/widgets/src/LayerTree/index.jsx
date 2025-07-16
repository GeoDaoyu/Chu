import { layerControlMiddleware } from '@chu/middleware';
import { createLayerTreeStore } from '@chu/store';
import { Tree } from 'antd';
import { useEffect } from 'react';

const useLayerTreeStore = createLayerTreeStore(layerControlMiddleware);

const LayerTree = ({ view, treeData }) => {
  const { checkedKeys, setCheckedKeys, setTreeData } = useLayerTreeStore();

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue, view);
  };

  useEffect(() => {
    setTreeData(treeData);
  }, [treeData, setTreeData]);

  return <Tree checkable onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} />;
};

export default LayerTree;
