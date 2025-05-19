import LayerList from '@arcgis/core/widgets/LayerList';
import React, { useEffect, useRef } from 'react';

export default function ({ view }) {
  const ref = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    if (ref.current) {
      widgetRef.current = new LayerList({
        view,
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
