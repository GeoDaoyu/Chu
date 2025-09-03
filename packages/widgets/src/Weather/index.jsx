import '@arcgis/map-components/components/arcgis-weather';
import useViewStore from '@chu/store/useViewStore';
import { useEffect } from 'react';

const Widget = () => {
  const view = useViewStore((state) => state.view);
  useEffect(() => {
    const weather = view.environment.weather.clone();
    return () => {
      view.environment.weather = weather;
    };
  }, [view]);

  return <arcgis-weather reference-element="view" />;
};

export default Widget;
