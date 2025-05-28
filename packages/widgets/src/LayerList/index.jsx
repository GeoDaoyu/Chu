import LayerList from '@arcgis/core/widgets/LayerList';
import { useEffect, useRef } from 'react';

const Widget = ({ view }) => {
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
};

export default Widget;
