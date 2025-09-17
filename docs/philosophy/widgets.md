# 微件开发

2025年7月之后，微件都会迁移到map-components，通过`view`的`domId`，即可和地图关联到一起。

特殊地，可以从`store`中获取view实例。

> 我们约定view的domId为"view"。

下面是一些微件开发源码示例：

### 官方微件

- [标绘](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Sketch/index.jsx)、[视线分析](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/LineOfSight/index.jsx)（内置Layer的微件）
- [天气](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Weather/index.jsx)、[日照](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Daylight/index.jsx)（有副作用的微件）
- [图例](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Legend/index.jsx)

### 自定义微件

- [层级控制](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/ZoomKeeper/index.jsx)（无须创建Layer的微件）
- [视频融合](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/MediaMixin/index.jsx)（需要创建Layer的微件）

## Map

Map和Scene不使用map-components开发，原因是web-components太难扩展。

使用@arcgis/core开发，绑定view给其余微件使用。

示例代码：[Scene](https://github.com/GeoDaoyu/Chu/blob/main/apps/scene-pro/src/widgets/Map/index.js)

## @arcgis/map-components

@arcgis/map-components基于web-components开发，仅支持常量传参，不支持对象参数。

对象参数需要在创建结束后绑定，比如

```js
import Basemap from '@arcgis/core/Basemap';

const viewElement = document.querySelector('arcgis-scene');

viewElement.viewOnReady(async () => {
  viewElement.basemap = Basemap.fromId('satellite');
});
```

## 参考链接

https://developers.arcgis.com/javascript/latest/migrating-to-components/

https://developers.arcgis.com/javascript/latest/programming-patterns/#associate-components-with-a-map-or-scene-component
