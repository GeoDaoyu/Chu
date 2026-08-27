import '@arcgis/map-components/components/arcgis-scale-bar';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-scale-bar ref={ref} />;
};

export default Widget;
