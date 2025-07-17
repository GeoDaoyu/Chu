import { create } from 'zustand';

export const layerTreeStoreCreator = (set) => ({
  checkedKeys: [],
  treeData: [],
  setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
  setTreeData: (newTreeData) => set({ treeData: newTreeData }),
});

export const useLayerTreeStore = create(layerTreeStoreCreator);
