import '@arcgis/map-components/components/arcgis-slice';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-slice ref={ref} />;
};

export default Widget;
