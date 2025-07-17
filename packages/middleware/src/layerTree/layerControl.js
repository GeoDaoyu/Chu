import { difference } from 'ramda';
import { addLayer, hasLayer, removeLayer } from '@chu/lib';
import { useViewStore } from '@chu/store';
import { getLayerInfo } from './util';

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
            // TODO: treeData 只能在这里从store获取吗？
            const layerInfo = getLayerInfo(treeData, key);
            addLayer(view, layerInfo);
          }
        });

        // TODO: map.removeMany ?
        removeKeys.forEach((key) => removeLayer(view, key));
      }

      set(...args);
    },
    get,
    api,
  );

export default layerControl;
