import defaultUseLayerTreeStore from '@chu/store/useLayerTreeStore';
import { Tree } from 'antd';

const LayerTree = ({ treeData, useStore, ...rest }) => {
  const store = useStore ?? defaultUseLayerTreeStore;
  const { checkedKeys, setCheckedKeys } = store();

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  return (
    <Tree {...rest} checkable onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} />
  );
};

export default LayerTree;
