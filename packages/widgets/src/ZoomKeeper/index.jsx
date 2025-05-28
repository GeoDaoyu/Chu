import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { watch } from '@arcgis/core/core/reactiveUtils.js';
import ZoomVM from '@arcgis/core/widgets/Zoom/ZoomViewModel.js';
import { Button, Flex, Space, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const { Text } = Typography;

export default function ({ view }) {
  const { zoom: currentZoom } = view;
  const [zoom, setZoom] = useState(Math.round(currentZoom));
  const vmRef = useRef(new ZoomVM({ view }));

  const zoomIn = () => {
    vmRef.current?.zoomIn();
  };
  const zoomOut = () => {
    vmRef.current?.zoomOut();
  };

  useEffect(() => {
    watch(
      () => view.zoom,
      (updating) => {
        setZoom(Math.round(updating));
      },
    );
  }, [view]);

  return (
    <Flex justify="space-between" align="center">
      <Text>
        层级:
        {zoom}
      </Text>
      <Space>
        <Button type="primary" icon={<PlusOutlined />} onClick={zoomIn} />
        <Button type="primary" icon={<MinusOutlined />} onClick={zoomOut} />
      </Space>
    </Flex>
  );
}
