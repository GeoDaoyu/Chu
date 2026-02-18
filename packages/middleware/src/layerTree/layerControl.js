import { addLayer, hasLayer, removeLayer } from '@chu/lib';
import useViewStore from '@chu/store/useViewStore';
import { difference } from 'ramda';
import getLayerInfo from './getLayerInfo';

const layerControl = (config) => (set, get, api) =>
  config(
    (...args) => {
      const [{ checkedKeys: newValue }] = args;
      const { view } = useViewStore.getState();
      // 命中 setCheckedKeys
      if (newValue) {
        const { checkedKeys: oldValue, treeData } = get();
        const addKeys = difference(newValue, oldValue);
        const removeKeys = difference(oldValue, newValue);

        addKeys.forEach((key) => {
          if (!hasLayer(view, key)) {
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
