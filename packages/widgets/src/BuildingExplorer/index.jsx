import '@arcgis/map-components/components/arcgis-building-explorer';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-building-explorer ref={ref} />;
};

export default Widget;
