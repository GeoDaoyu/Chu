import '@arcgis/map-components/components/arcgis-basemap-toggle';

const Widget = (properties) => {
  return <arcgis-basemap-toggle reference-element="view" {...properties} />;
};

export default Widget;
