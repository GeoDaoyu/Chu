import { Typography, Flex } from 'antd';
import { useViewStore } from '@chu/store';
import { useEffect, useRef } from 'react';
import { watch } from '@arcgis/core/core/reactiveUtils.js';
import { identify } from '@arcgis/core/rest/identify.js';
import { head, isEmpty, isNil, map, compose, toPairs, join } from 'ramda';

const { Text } = Typography;

const Identify = () => {
  const view = useViewStore((state) => state.view);
  const handle = useRef();
  const identifyLayer = useRef(view.map.layers.find((layer) => layer.type === 'map-image'));

  useEffect(() => {
    watch(
      () => view.map.allLayers.find((layer) => layer.type === 'map-image'),
      (layer) => {
        identifyLayer.current = layer;
      },
    );
  }, [view]);
  useEffect(() => {
    const executeIdentify = (event) => {
      if (isNil(identifyLayer.current)) return;
      const { url } = identifyLayer.current;
      const params = {
        geometry: event.mapPoint,
        mapExtent: view.extent,
        tolerance: 3,
      };
      identify(url, params).then(({ results }) => {
        if (isEmpty(results)) return;
        const result = head(results);
        showPopup(result.feature, event.mapPoint);
      });
    };
    const showPopup = (feature, mapPoint) => {
      const { title } = identifyLayer.current;
      const popupTemplate = {
        title,
        content: compose(
          join('<br>'),
          map(([name, value]) => `<b>${name}:</b> ${value}`),
          toPairs,
        )(feature.attributes),
      };
      view.openPopup({
        features: [
          {
            ...feature,
            popupTemplate,
          },
        ],
        location: mapPoint,
      });
    };
    view.when(function () {
      handle.current = view.on('click', executeIdentify);
    });
    return () => {
      handle.current.remove();
    };
  }, [view]);

  return (
    <Flex align="center">
      <Text>已启用点图查询，点击地图进行查询。</Text>
    </Flex>
  );
};
export default Identify;
