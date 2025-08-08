export const goToFullExtent = (view, id) => {
  const layer = view.map.findLayerById(id);
  if (layer) {
    view.goTo(layer.fullExtent);
  }
};
