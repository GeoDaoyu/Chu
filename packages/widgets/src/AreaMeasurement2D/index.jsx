import '@arcgis/map-components/components/arcgis-area-measurement-2d';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-area-measurement-2d ref={ref} />;
};

export default Widget;
