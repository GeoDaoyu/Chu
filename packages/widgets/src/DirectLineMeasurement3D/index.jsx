import '@arcgis/map-components/components/arcgis-direct-line-measurement-3d';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-direct-line-measurement-3d ref={ref} />;
};

export default Widget;
