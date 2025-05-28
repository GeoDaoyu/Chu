import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { useViewStore } from '@chu/store';
import { useCallback } from 'react';
import { id, renderer, template, url } from './config.js';

export default () => {
  const view = useViewStore(state => state.view);
  const add = useCallback(() => {
    const geojsonLayer = new GeoJSONLayer({
      id,
      url,
      copyright: 'USGS Earthquakes',
      popupTemplate: template,
      renderer,
      orderBy: {
        field: 'mag',
      },
    });
    view.map.add(geojsonLayer);
  }, [view]);
  const remove = useCallback(() => {
    const layer = view.map.findLayerById(id);
    view.map.remove(layer);
  }, [view]);
  return {
    add,
    remove,
  };
};
