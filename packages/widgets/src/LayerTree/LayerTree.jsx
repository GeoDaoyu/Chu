import useLayerTreeStore from '@chu/store/useLayerTreeStore';
import { Tree } from 'antd';

const LayerTree = ({ treeData, ...rest }) => {
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  return (
    <Tree {...rest} checkable onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} />
  );
};

export default LayerTree;
