import { create } from 'zustand';
import layerControl from './layerControlMiddleware';

const useLayerTreeStore = create(
  layerControl((set) => ({
    checkedKeys: [],
    setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
  })),
);

export default useLayerTreeStore;
