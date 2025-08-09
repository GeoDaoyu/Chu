import '@arcgis/map-components/components/arcgis-elevation-profile';

const Widget = (props) => {
  return <arcgis-elevation-profile reference-element="view" {...props} />;
};

export default Widget;
