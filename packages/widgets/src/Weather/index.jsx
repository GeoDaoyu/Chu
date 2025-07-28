import '@arcgis/map-components/components/arcgis-weather';
import { useEffect } from 'react';

const Widget = ({ view }) => {
  useEffect(() => {
    const weather = view.environment.weather.clone();
    return () => {
      // eslint-disable-next-line
      view.environment.weather = weather;
    };
  }, [view]);

  return <arcgis-weather reference-element="view" />;
};

export default Widget;
