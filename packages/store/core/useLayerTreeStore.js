import { layerControl } from '@chu/middleware';
import withMiddlewares from '../util/withMiddlewares';

const storeCreator = (set) => ({
  checkedKeys: [],
  setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
  treeData: [],
  setTreeData: (newTreeData) => set({ treeData: newTreeData }),
});

const useLayerTreeStore = withMiddlewares(storeCreator, [layerControl]);

export default useLayerTreeStore;
