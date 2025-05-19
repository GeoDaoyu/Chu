import { create } from 'zustand';
import layerControl from './layerControlMiddleware';

// TODO: 迁移到packages/store
const useLayerTreeStore = create(
  layerControl((set) => ({
    checkedKeys: [],
    setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
  })),
);

export default useLayerTreeStore;
