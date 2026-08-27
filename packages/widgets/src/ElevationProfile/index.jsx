import '@arcgis/map-components/components/arcgis-elevation-profile';
import useReferenceElement from '../useReferenceElement';

const Widget = (properties) => {
  const ref = useReferenceElement();
  return <arcgis-elevation-profile ref={ref} {...properties} />;
};

export default Widget;
