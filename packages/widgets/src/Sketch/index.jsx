import Sketch from '@arcgis/core/widgets/Sketch';
import React, { useEffect, useRef } from 'react';
import useLayer from './useLayer';

export default function ({ view }) {
  const ref = useRef();
  const widgetRef = useRef();
  const layerRef = useLayer({ view });

  useEffect(() => {
    if (ref.current && layerRef.current) {
      widgetRef.current = new Sketch({
        view: view,
        layer: layerRef.current,
        container: ref.current,
      });
    }
    return () => {
      if (widgetRef.current) {
        widgetRef.current.destroy();
      }
    };
  }, [view]);

  return <div ref={ref}></div>;
}
