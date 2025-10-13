import { Button, Flex } from 'antd';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Viewshed from '@arcgis/core/analysis/Viewshed';
import ViewshedAnalysis from '@arcgis/core/analysis/ViewshedAnalysis';
import useViewStore from '@chu/store/useViewStore';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import { useCallback, useEffect, useRef, useState } from 'react';

const ViewshedWidget = () => {
  const view = useViewStore((state) => state.view);
  const sketch = useRef(null);
  const viewshedAnalysis = useRef(null);
  const [point, setPoint] = useState(null);

  const createPoint = () => {
    setPoint(null);
    sketch.current.create('point');
  };

  const point2viewshed = useCallback(
    (geometry) => {
      const { camera } = view;
      return new Viewshed({
        observer: geometry,
        farDistance: 600,
        tilt: camera.tilt,
        heading: camera.heading,
        horizontalFieldOfView: 85,
        verticalFieldOfView: 52,
      });
    },
    [view],
  );

  const addViewsher = useCallback(
    async (sketchPoint) => {
      const viewshed = point2viewshed(sketchPoint);
      viewshedAnalysis.current = new ViewshedAnalysis({ viewsheds: [viewshed] });
      view.analyses.add(viewshedAnalysis.current);
      const analysisView = await view.whenAnalysisView(viewshedAnalysis.current);
      analysisView.interactive = true;
      analysisView.selectedViewshed = viewshed;
    },
    [view, point2viewshed],
  );

  useEffect(() => {
    const graphicsLayer = new GraphicsLayer();
    view.map.add(graphicsLayer);
    sketch.current = new SketchViewModel({
      view,
      layer: graphicsLayer,
      updateOnGraphicClick: false,
    });
    sketch.current.on('create', function (event) {
      if (event.state === 'complete') {
        setPoint(event.graphic.geometry);
      }
    });
    return () => {
      sketch.current = null;
      view.map.remove(graphicsLayer);
    };
  }, [view]);

  useEffect(() => {
    if (point) {
      addViewsher(point);
    }
    return () => {
      view.analyses.remove(viewshedAnalysis.current);
    };
  }, [point, view, addViewsher]);

  return (
    <Flex justify="space-between" align="center">
      <Button type="primary" onClick={createPoint} block>
        点击绘制观测点
      </Button>
    </Flex>
  );
};
export default ViewshedWidget;
