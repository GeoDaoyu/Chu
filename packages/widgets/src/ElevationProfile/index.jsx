import '@arcgis/map-components/components/arcgis-elevation-profile';

const Widget = (properties) => {
  return <arcgis-elevation-profile reference-element="view" {...properties} />;
};

export default Widget;
