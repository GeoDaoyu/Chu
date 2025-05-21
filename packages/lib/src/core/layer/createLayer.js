import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import ImageryTileLayer from '@arcgis/core/layers/ImageryTileLayer';
import IntegratedMesh3DTilesLayer from '@arcgis/core/layers/IntegratedMesh3DTilesLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';

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

// type是只读字段，所以不能直接new Layer
const createLayer = ({ type, ...rest }) => {
  const LayerClass = supportLayerMap.get(type);
  return new LayerClass(rest);
};
export default createLayer;
