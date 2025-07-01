import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import { useEffect, useRef } from 'react';
import { useAccess } from '@umijs/max';

const Widget = ({ view }) => {
  const ref = useRef();
  const widgetRef = useRef();
  const access = useAccess();
  useEffect(() => {
    if (ref.current) {
      widgetRef.current = new CoordinateConversion({
        view,
        container: ref.current,
        visibleElements: {
          settingsButton: access.canSeeAdmin,
          captureButton: access.canSeeAdmin,
        },
      });
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.destroy();
      }
    };
  }, [view, access]);

  return <div ref={ref} />;
};

export default Widget;
