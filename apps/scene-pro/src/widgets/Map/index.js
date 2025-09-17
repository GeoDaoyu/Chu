import esriConfig from '@arcgis/core/config.js';
import useViewStore from '@chu/store/useViewStore';
import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import { useEffect, useRef } from 'react';
import styles from './index.less';

esriConfig.assetsPath = './assets';

const MapComponent = () => {
  const initializeView = useViewStore((state) => state.initialize);
  const ref = useRef();

  useEffect(() => {
    const map = new Map({
      basemap: 'topo-3d',
      ground: 'world-elevation',
    });
    const view = new SceneView({
      map,
      zoom: 9,
      center: [120, 30],
      container: ref.current,
      ui: {
        components: [],
      },
    });
    // binding view for map-components
    ref.current.view = view;

    view.when(() => {
      initializeView(view);
    });
  }, [initializeView]);

  return <div id="view" ref={ref} className={styles.container} />;
};

export default MapComponent;
