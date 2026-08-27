import '@arcgis/map-components/components/arcgis-fullscreen';
import useReferenceElement from '../useReferenceElement';

const Widget = () => {
  const ref = useReferenceElement();
  return <arcgis-fullscreen ref={ref} />;
};

export default Widget;
