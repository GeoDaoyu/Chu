import '@arcgis/map-components/components/arcgis-daylight';
import useViewStore from '@chu/store/useViewStore';
import { useEffect } from 'react';

const Widget = () => {
  const { view } = useViewStore();
  useEffect(() => {
    const lighting = view.environment.lighting.clone();
    return () => {
      view.environment.lighting = lighting;
    };
  }, [view]);

  return <arcgis-daylight reference-element="view" />;
};

export default Widget;
