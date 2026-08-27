import '@arcgis/map-components/components/arcgis-compass';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-compass ref={ref} />;
};

export default Widget;
