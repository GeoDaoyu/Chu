import '@arcgis/map-components/components/arcgis-swipe';
import { useEffect } from 'react';

const Widget = () => {
  useEffect(() => {
    const arcgisSwipe = document.querySelector('arcgis-swipe');
    const arcgisView = document.getElementById('view');
    arcgisView.append(arcgisSwipe);
    return () => {
      arcgisSwipe.destroy();
    };
  }, []);
  return <arcgis-swipe reference-element="view" />;
};

export default Widget;
