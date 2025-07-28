import '@arcgis/map-components/components/arcgis-daylight';
import { useEffect } from 'react';

const Widget = ({ view }) => {
  useEffect(() => {
    const lighting = view.environment.lighting.clone();
    return () => {
      // eslint-disable-next-line
      view.environment.lighting = lighting;
    };
  }, [view]);

  return <arcgis-daylight reference-element="view" />;
};

export default Widget;
