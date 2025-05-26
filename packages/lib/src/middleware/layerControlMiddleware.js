import { difference } from 'ramda';
import { addLayer, hasLayer, removeLayer } from '../core';

const layerControlMiddleware = (config) => (set, get, api) => {
  const initialState = config(set, get, api);
  return {
    ...initialState,
    // TODO: 解除view的传参
    setCheckedKeys: (newValue, view) => {
      const treeData = get().treeData;
      const oldValue = get().checkedKeys;
      const addKeys = difference(newValue, oldValue);
      const removeKeys = difference(oldValue, newValue);

      addKeys.forEach((key) => {
        if (!hasLayer(view, key)) {
          addLayer(view, treeData, key);
        }
      });

      removeKeys.forEach((key) => removeLayer(view, key));

      set({ checkedKeys: newValue });
    },
  };
};

export default layerControlMiddleware;
