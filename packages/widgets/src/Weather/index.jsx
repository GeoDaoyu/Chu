import '@arcgis/map-components/components/arcgis-weather';
import useViewStore from '@chu/store/useViewStore';
import { useEffect } from 'react';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const view = useViewStore((state) => state.view);
  const ref = useReferenceElement();
  useEffect(() => {
    const weather = view.environment.weather.clone();
    return () => {
      view.environment.weather = weather;
    };
  }, [view]);

  return <arcgis-weather ref={ref} />;
};

export default Widget;
