import { addLayer, hasLayer, removeLayer } from '@chu/lib';
import useViewStore from '@chu/store/useViewStore';
import { difference, union } from 'ramda';
import getLayerInfo from './getLayerInfo';
import getDefaultCheckedKeys from './getDefaultCheckedKeys';

const layerControl = (config) => (set, get, api) =>
  config(
    (...args) => {
      const [arg] = args;
      const { view } = useViewStore.getState();

      // 命中 setTreeData — 自动勾选 defaultChecked 的节点
      if (arg && 'treeData' in arg) {
        set(...args);
        const defaultKeys = getDefaultCheckedKeys(arg.treeData);
        if (defaultKeys.length) {
          const { checkedKeys } = get();
          get().setCheckedKeys(union(checkedKeys, defaultKeys));
        }
        return;
      }

      // 命中 setCheckedKeys
      const [{ checkedKeys: newValue }] = args;
      if (newValue) {
        const { checkedKeys: oldValue, treeData } = get();
        const addKeys = difference(newValue, oldValue);
        const removeKeys = difference(oldValue, newValue);

        addKeys.forEach((key) => {
          if (!hasLayer(view, key)) {
            const layerInfo = getLayerInfo(treeData, key);
            if (layerInfo) addLayer(view, layerInfo);
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
