import { layerControl } from '@chu/middleware';
import { layerTreeStoreCreator, withMiddlewares } from '@chu/store';
import { Tree } from 'antd';
import { useMemo, useEffect } from 'react';
import { useModel } from '@umijs/max';

const LayerTree = ({ treeData, getLayerInfo, ...rest }) => {
  const useLayerTreeStore = useMemo(
    () => withMiddlewares(layerTreeStoreCreator, [layerControl(getLayerInfo)]),
    [getLayerInfo],
  );
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();
  const { layerList } = useModel('layers');

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  useEffect(() => {
    setCheckedKeys(layerList);
  }, [layerList, setCheckedKeys]);

  return (
    <Tree {...rest} checkable onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} />
  );
};

export default LayerTree;
