import { difference } from 'ramda';
import { addLayer, hasLayer, removeLayer } from '@chu/lib';
import { useViewStore } from '@chu/store';

const { view } = useViewStore.getState();

const layerControl = (config) => (set, get, api) =>
  config(
    (...args) => {
      const [{ checkedKeys: newValue }] = args;
      // 命中 setCheckedKeys
      if (newValue) {
        const { treeData, checkedKeys: oldValue } = get();
        const addKeys = difference(newValue, oldValue);
        const removeKeys = difference(oldValue, newValue);

        addKeys.forEach((key) => {
          if (!hasLayer(view, key)) {
            addLayer(view, treeData, key);
          }
        });

        removeKeys.forEach((key) => removeLayer(view, key));
      }

      set(...args);
    },
    get,
    api,
  );

export default layerControl;
