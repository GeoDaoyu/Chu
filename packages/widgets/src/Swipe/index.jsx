import '@arcgis/map-components/components/arcgis-swipe';
import { useEffect } from 'react';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  useEffect(() => {
    const arcgisSwipe = document.querySelector('arcgis-swipe');
    const arcgisView = document.getElementById('view');
    arcgisView.append(arcgisSwipe);
    return () => {
      arcgisSwipe.destroy();
    };
  }, []);
  return <arcgis-swipe ref={ref} />;
};

export default Widget;
