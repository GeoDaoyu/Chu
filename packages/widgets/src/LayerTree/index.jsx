import { layerControlMiddleware } from '@chu/lib';
import { createLayerTreeStore } from '@chu/store';
import { Tree } from 'antd';

const LayerTree = ({ view, treeData }) => {
  const useLayerTreeStore = createLayerTreeStore(layerControlMiddleware);
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue, treeData, view);
  };

  return (
    <Tree
      checkable
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      treeData={treeData}
    />
  );
};

export default LayerTree;
