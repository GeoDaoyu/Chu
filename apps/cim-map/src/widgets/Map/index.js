import esriConfig from '@arcgis/core/config.js';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import { useViewStore } from '@chu/store';
import { useEffect, useRef } from 'react';
import styles from './index.less';

esriConfig.assetsPath = './assets';

export default () => {
  const ref = useRef();
  const initializeView = useViewStore(state => state.initialize);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const map = new Map({
      basemap: 'topo-vector',
    });

    const view = new SceneView({
      container: ref.current,
      map,
      zoom: 9,
      center: [120, 30],
      ui: {
        components: [],
      },
    });
    view.when(() => {
      initializeView(view);
    });
  }, [ref]);

  return <div className={styles.viewDiv} ref={ref}></div>;
};
