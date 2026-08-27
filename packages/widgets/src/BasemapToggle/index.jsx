import '@arcgis/map-components/components/arcgis-basemap-toggle';
import useReferenceElement from '../useReferenceElement';

const Widget = (properties) => {
  const ref = useReferenceElement();
  return <arcgis-basemap-toggle ref={ref} {...properties} />;
};

export default Widget;
