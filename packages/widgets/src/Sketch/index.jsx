import '@arcgis/map-components/components/arcgis-sketch';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-sketch ref={ref} />;
};

export default Widget;
