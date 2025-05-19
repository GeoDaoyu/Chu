import { useLayerTreeStore } from '@chu/store';
import { Tree } from 'antd';

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
