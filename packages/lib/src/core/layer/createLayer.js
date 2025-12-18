import Layer from '@arcgis/core/layers/Layer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import ImageryTileLayer from '@arcgis/core/layers/ImageryTileLayer';
import IntegratedMesh3DTilesLayer from '@arcgis/core/layers/IntegratedMesh3DTilesLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import { cond, has, T } from 'ramda';

const supportLayerMap = new Map([
  ['feature', FeatureLayer],
  ['geojson', GeoJSONLayer],
  ['graphics', GraphicsLayer],
  ['imagery', ImageryLayer],
  ['imagery-tile', ImageryTileLayer],
  ['integrated-mesh-3d-tiles', IntegratedMesh3DTilesLayer],
  ['map-image', MapImageLayer],
  ['tile', TileLayer],
  ['vector-tile', VectorTileLayer],
]);

const createLayerByUrl = async ({ key, url, ...rest }) =>
  await Layer.fromArcGISServerUrl({ url, properties: { id: key, ...rest } });

// type是只读字段，所以不能直接new Layer
const createLayerByType = ({ type, key, ...rest }) => {
  if (type === 'group') {
    return createGroupLayer(rest);
  }
  const LayerClass = supportLayerMap.get(type);
  return new LayerClass({ id: key, ...rest });
};

const createGroupLayer = async ({ layers: layerInfos, key, ...rest }) => {
  const layers = await Promise.all(layerInfos.map(createLayer));
  return new GroupLayer({
    ...rest,
    id: key,
    layers,
  });
};

const createLayer = cond([
  [has('type'), createLayerByType],
  [has('url'), createLayerByUrl],
  [T, () => undefined],
]);

export default createLayer;
