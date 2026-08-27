import '@arcgis/map-components/components/arcgis-area-measurement-3d';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-area-measurement-3d ref={ref} />;
};

export default Widget;
