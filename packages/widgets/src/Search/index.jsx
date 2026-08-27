import '@arcgis/map-components/components/arcgis-search';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-search ref={ref} />;
};

export default Widget;
