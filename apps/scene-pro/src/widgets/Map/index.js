import esriConfig from '@arcgis/core/config.js';
import '@arcgis/map-components/components/arcgis-scene';
import useViewStore from '@chu/store/useViewStore';
import { useEffect, useRef } from 'react';

esriConfig.assetsPath = './assets';

const viewProperties = {
  zoom: 9,
  center: [120, 30],
  basemap: 'topo-3d',
  ground: 'world-elevation',
};

const MapComponent = () => {
  const initializeView = useViewStore((state) => state.initialize);
  const ref = useRef();

  useEffect(() => {
    // onArcgisViewReadyChange is not work?
    ref.current.addEventListener('arcgisViewReadyChange', () => {
      initializeView(ref.current.view);
      ref.current.view.ui.remove('attribution');
    });
  }, [initializeView]);

  return <arcgis-scene ref={ref} id="view" {...viewProperties} />;
};

export default MapComponent;
