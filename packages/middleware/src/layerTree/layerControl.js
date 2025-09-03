import { addLayer, hasLayer, removeLayer } from '@chu/lib';
import useViewStore from '@chu/store/useViewStore';
import { difference } from 'ramda';

const { view } = useViewStore.getState();

// 需要app中传递getLayerInfo函数
const layerControl = (getLayerInfo) => (config) => (set, get, api) =>
  config(
    (...args) => {
      const [{ checkedKeys: newValue }] = args;
      // 命中 setCheckedKeys
      if (newValue) {
        const { checkedKeys: oldValue } = get();
        const addKeys = difference(newValue, oldValue);
        const removeKeys = difference(oldValue, newValue);

        addKeys.forEach((key) => {
          if (!hasLayer(view, key)) {
            const layerInfo = getLayerInfo(key);
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
