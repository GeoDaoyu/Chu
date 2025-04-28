import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Sketch from '@arcgis/core/widgets/Sketch';
import React, { useEffect, useRef } from 'react';

export default function ({ view }) {
  const ref = useRef();

  useEffect(() => {
    const sketchLayer = new GraphicsLayer({
      elevationInfo: {
        mode: 'absolute-height',
      },
      title: 'Sketched geometries',
      listMode: 'hide',
    });

    view.map.add(sketchLayer);
    new Sketch({
      view: view,
      layer: sketchLayer,
      container: ref.current,
    });
    return () => {
      view.map.remove(sketchLayer);
    };
  }, []);

  return <div ref={ref}></div>;
}
