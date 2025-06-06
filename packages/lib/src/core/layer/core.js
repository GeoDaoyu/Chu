import Layer from '@arcgis/core/layers/Layer';
import createLayer from './createLayer';

export const hasLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  return !!layer;
};
const findNode = (treeData, key) => {
  if (treeData.key === key) {
    return treeData;
  }

  if (treeData.children) {
    for (const child of treeData.children) {
      const found = findNode(child, key);
      if (found) {
        return found;
      }
    }
  }

  return null;
};
// TODO: 提取获取图层info的函数
export const addLayer = async (view, treeData, key) => {
  const node = findNode({ children: treeData }, key);
  if (!node) {
    return;
  }
  const { url, type, ...rest } = node;
  const layer = type
    ? createLayer({ id: key, ...node })
    : url
      ? await Layer.fromArcGISServerUrl({
          url,
          properties: { id: key, ...rest },
        })
      : new Layer({ id: key });
  view.map.add(layer);
};
export const removeLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  view.map.remove(layer);
};
