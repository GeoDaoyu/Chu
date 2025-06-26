import LineOfSight from '@arcgis/core/widgets/LineOfSight';
import { useEffect, useRef } from 'react';

const Widget = ({ view }) => {
  const ref = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    if (ref.current) {
      widgetRef.current = new LineOfSight({
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

  return <div ref={ref} />;
};
export default Widget;
