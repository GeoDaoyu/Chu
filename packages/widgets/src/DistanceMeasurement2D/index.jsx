import '@arcgis/map-components/components/arcgis-distance-measurement-2d';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-distance-measurement-2d ref={ref} />;
};

export default Widget;
