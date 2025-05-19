import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Sketch from '@arcgis/core/widgets/Sketch';
import React, { useEffect, useRef } from 'react';

export default function ({ view }) {
  const ref = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    const layer = new GraphicsLayer({
      listMode: 'hide',
    });

    view.map.add(layer);
    widgetRef.current = new Sketch({
      view,
      layer,
      container: ref.current,
    });

    return () => {
      if (widgetRef.current) {
        widgetRef.current.destroy();
      }

      view.map.remove(layer);
    };
  }, [view]);

  return <div ref={ref}></div>;
}
