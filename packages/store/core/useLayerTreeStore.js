import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { difference, union } from 'ramda';
import { addLayer, getDefaultCheckedKeys, getLayerInfo, hasLayer, removeLayer } from '@chu/lib';
import useViewStore from './useViewStore';

const defaultLayerControl = {
  onAddKeys(addKeys, { view, treeData }) {
    addKeys.forEach((key) => {
      if (!hasLayer(view, key)) {
        const layerInfo = getLayerInfo(treeData, key);
        if (layerInfo) addLayer(view, layerInfo);
      }
    });
  },
  onRemoveKeys(removeKeys, { view }) {
    removeKeys.forEach((key) => removeLayer(view, key));
  },
};

const createLayerTreeStore = (layerControl) => {
  const control = layerControl ?? defaultLayerControl;

  const store = create(
    subscribeWithSelector((set) => ({
      checkedKeys: [],
      setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
      treeData: [],
      setTreeData: (newTreeData) => set({ treeData: newTreeData }),
    })),
  );

  // treeData 变更 → 自动勾选 defaultChecked 的节点
  store.subscribe(
    (state) => state.treeData,
    (newTreeData) => {
      const defaultKeys = getDefaultCheckedKeys(newTreeData);
      if (defaultKeys.length) {
        const { checkedKeys } = store.getState();
        store.getState().setCheckedKeys(union(checkedKeys, defaultKeys));
      }
    },
    { fireImmediately: false },
  );

  // checkedKeys 变更 → 委托给 layerControl
  store.subscribe(
    (state) => state.checkedKeys,
    (newKeys, oldKeys) => {
      const { view } = useViewStore.getState();
      const { treeData } = store.getState();

      const addKeys = difference(newKeys, oldKeys ?? []);
      const removeKeys = difference(oldKeys ?? [], newKeys);

      if (addKeys.length) control.onAddKeys(addKeys, { view, treeData });
      if (removeKeys.length) control.onRemoveKeys(removeKeys, { view });
    },
    { fireImmediately: false },
  );

  return store;
};

// 默认单例
const useLayerTreeStore = createLayerTreeStore();

export { createLayerTreeStore };
export default useLayerTreeStore;
