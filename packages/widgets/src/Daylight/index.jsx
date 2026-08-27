import '@arcgis/map-components/components/arcgis-daylight';
import useViewStore from '@chu/store/useViewStore';
import { useEffect } from 'react';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const { view } = useViewStore();
  const ref = useReferenceElement();
  useEffect(() => {
    const lighting = view.environment.lighting.clone();
    return () => {
      view.environment.lighting = lighting;
    };
  }, [view]);

  return <arcgis-daylight ref={ref} />;
};

export default Widget;
