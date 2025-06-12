# 微件开发

大部分微件，通过`view`参数，即可和地图关联到一起。

下面是一些微件开发源码示例：

### 官方微件

- [标绘](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Sketch/index.jsx)（需要创建Layer的微件）
- [视线分析](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/LineOfSight/index.jsx)（无须创建Layer的微件）
- [天气](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Weather/index.jsx)、[日照](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Daylight/index.jsx)（有副作用的微件）
- [图例](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/Legend/index.jsx)

### 自定义微件

- [层级控制](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/ZoomKeeper/index.jsx)（无须创建Layer的微件）
- [视频融合](https://github.com/GeoDaoyu/Chu/blob/main/packages/widgets/src/MediaMixin/index.jsx)（需要创建Layer的微件）
