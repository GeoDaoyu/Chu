import { create } from 'zustand';

export const createLayerTreeStore = (middleware) => {
  const store = set => ({
    checkedKeys: [],
    treeData: [],
    setCheckedKeys: newCheckedKeys => set({ checkedKeys: newCheckedKeys }),
    setTreeData: newTreeData => set({ treeData: newTreeData }),
  });

  const storeCreator = middleware ? middleware(store) : store;

  return create(storeCreator);
};

const useLayerTreeStore = createLayerTreeStore();
export default useLayerTreeStore;
