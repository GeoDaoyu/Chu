import Weather from '@arcgis/core/widgets/Weather';
import React, { useEffect, useRef } from 'react';

export default function ({ view }) {
  const ref = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    if (ref.current) {
      widgetRef.current = new Weather({
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
