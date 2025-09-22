import Layer from '@arcgis/core/layers/Layer';
import createLayer from './createLayer';
import { cond, has, T } from 'ramda';

export const hasLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  return !!layer;
};

export const addLayer = async (view, layerInfo) => {
  if (!layerInfo) {
    return;
  }
  const { key, url, type, ...rest } = layerInfo;
  const layer = cond([
    [has('type'), () => createLayer({ id: key, ...layerInfo })],
    [has('url'), () => Layer.fromArcGISServerUrl({ url, properties: { id: key, ...rest } })],
    [T, () => new Layer({ id: key, ...rest })],
  ])(layerInfo);
  view.map.add(layer);
};

export const removeLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  view.map.remove(layer);
};
