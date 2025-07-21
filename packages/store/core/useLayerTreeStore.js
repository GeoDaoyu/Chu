import { create } from 'zustand';

export const layerTreeStoreCreator = (set) => ({
  checkedKeys: [],
  setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
});

export const useLayerTreeStore = create(layerTreeStoreCreator);
