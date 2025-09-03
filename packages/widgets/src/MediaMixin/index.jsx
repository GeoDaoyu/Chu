import MediaLayer from '@arcgis/core/layers/MediaLayer';
import useViewStore from '@chu/store/useViewStore';
import { Button, Flex } from 'antd';
import { useEffect, useRef } from 'react';

const MediaMixin = ({ mediaLayerConfig }) => {
  const view = useViewStore((state) => state.view);
  const layer = useRef(null);
  useEffect(() => {
    layer.current = new MediaLayer(mediaLayerConfig);
    view.map.add(layer.current);
    return () => {
      view.map.remove(layer.current);
    };
  }, [view, mediaLayerConfig]);
  const show = () => {
    layer.current.visible = true;
  };
  const hide = () => {
    layer.current.visible = false;
  };

  return (
    <Flex vertical gap="middle">
      <Button type="primary" block onClick={show}>
        显示视频
      </Button>
      <Button type="primary" block onClick={hide}>
        隐藏视频
      </Button>
    </Flex>
  );
};

export default MediaMixin;
