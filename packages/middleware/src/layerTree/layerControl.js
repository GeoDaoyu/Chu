import { difference } from 'ramda';
import { addLayer, hasLayer, removeLayer } from '@chu/lib';
import { useViewStore } from '@chu/store';

const { view } = useViewStore.getState();

const layerControlMiddleware = (config) => (set, get, api) => {
  const initialState = config(set, get, api);
  return {
    ...initialState,
    setCheckedKeys: (newValue) => {
      const { treeData } = get();
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
