import { Tree } from 'antd';
import useLayerTreeStore from './useLayerTreeStore';

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
