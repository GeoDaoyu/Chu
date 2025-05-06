import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { useEffect, useRef } from 'react';

export default function ({ view }) {
  const layerRef = useRef(null);

  useEffect(() => {
    layerRef.current = new GraphicsLayer({
      elevationInfo: {
        mode: 'absolute-height',
      },
      listMode: 'hide',
    });

    view.map.add(layerRef.current);
    return () => {
      view.map.remove(layerRef.current);
    };
  }, [view]);

  return layerRef;
}
