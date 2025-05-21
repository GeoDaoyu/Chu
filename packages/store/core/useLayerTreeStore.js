import { create } from 'zustand';

export const createLayerTreeStore = (middleware) => {
  const store = (set) => ({
    checkedKeys: [],
    setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
  });

  const storeCreator = middleware ? middleware(store) : store;

  return create(storeCreator);
};

const useLayerTreeStore = createLayerTreeStore();
export default useLayerTreeStore;
