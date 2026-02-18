import esriConfig from '@arcgis/core/config.js';
import useViewStore from '@chu/store/useViewStore';
import useLayerTreeStore from '@chu/store/useLayerTreeStore';
import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import { useEffect, useRef } from 'react';
import styles from './index.less';
import getLayerTree from '@/services/getLayerTree.js';

esriConfig.assetsPath = './assets';

const MapComponent = () => {
  const initializeView = useViewStore((state) => state.initialize);
  const setTreeData = useLayerTreeStore((state) => state.setTreeData);
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

  // TODO: 到底放哪儿？map组件里面应该放treeData吗？
  useEffect(() => {
    getLayerTree().then(({ data }) => setTreeData(data));
  }, [setTreeData]);

  return <div id="view" ref={ref} className={styles.container} />;
};

export default MapComponent;
