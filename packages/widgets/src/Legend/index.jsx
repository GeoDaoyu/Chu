import '@arcgis/map-components/components/arcgis-legend';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-legend ref={ref} />;
};

export default Widget;
