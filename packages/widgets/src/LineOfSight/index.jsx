import '@arcgis/map-components/components/arcgis-line-of-sight';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-line-of-sight ref={ref} />;
};

export default Widget;
