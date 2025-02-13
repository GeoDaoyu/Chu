import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import { useModel } from '@umijs/max';
import { useEffect, useRef } from 'react';
import styles from './index.less';

export default () => {
  const ref = useRef();
  const { setView } = useModel('global');

  useEffect(() => {
    if (!ref.current) return;
    const map = new Map({
      basemap: 'topo-vector',
    });

    const view = new SceneView({
      container: ref.current,
      map: map,
      zoom: 9,
      center: [120, 30],
    });
    view.when(() => {
      setView(view);
    });
  }, [ref]);

  return <div className={styles.viewDiv} ref={ref}></div>;
};
