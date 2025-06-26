import Weather from '@arcgis/core/widgets/Weather';
import { useEffect, useRef } from 'react';

const Widget = ({ view }) => {
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
        // TODO: 还原天气设置
        widgetRef.current.destroy();
      }
    };
  }, [view]);

  return <div ref={ref} />;
};

export default Widget;
