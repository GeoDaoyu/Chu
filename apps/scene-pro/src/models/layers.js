import { useState } from 'react';

export default () => {
  const [layerList, setLayerList] = useState([]);

  return { layerList, setLayerList };
};
