import Daylight from '@arcgis/core/widgets/Daylight';
import { useEffect, useRef } from 'react';

const Widget = ({ view }) => {
  const ref = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    if (ref.current) {
      widgetRef.current = new Daylight({
        view,
        container: ref.current,
      });
    }

    return () => {
      if (widgetRef.current) {
        // TODO: 还原光照设置
        widgetRef.current.destroy();
      }
    };
  }, [view]);

  return <div ref={ref}></div>;
};

export default Widget;
