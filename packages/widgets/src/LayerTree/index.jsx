import { layerControlMiddleware } from '@chu/lib';
import { createLayerTreeStore } from '@chu/store';
import { Tree } from 'antd';

const useLayerTreeStore = createLayerTreeStore(layerControlMiddleware);

const LayerTree = ({ view, treeData }) => {
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
