import createLayer from './createLayer';

export const hasLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  return !!layer;
};

export const addLayer = async (view, layerInfo) => {
  const layer = await createLayer(layerInfo);
  view.map.add(layer);
};

export const removeLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  view.map.remove(layer);
};
