[English](./README.en-US.md) | 简体中文

<h1 align="center">Chu</h1>

🌍现代WebGIS框架

![last commit](https://badgen.net/github/last-commit/GeoDaoyu/Chu) [![Code Style](https://img.shields.io/badge/eslint--config--ali-_code%20style-green)](https://github.com/alibaba/f2e-spec) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](./CONTRIBUTING.md)

<p align="center">
  <a href="./docs/tutorial/quickstart.md">教程</a> •
  <a href="./docs/index.md">文档</a> •
  <a href="./docs/examples/index.md">示例</a> •
  <a href="./CONTRIBUTING.md">贡献</a>
</p>

Chu，中文发音为「啾」，是一个现代的WebGIS框架。总体使用Monorepo 架构构建，应用基于 [Umi](https://umijs.org/) 搭建，组件库基于 [dumi](https://d.umijs.org/) 搭建，地图引擎采用 [ArcGIS](https://developers.arcgis.com/javascript/latest/) 。旨在帮助开发者快速地搭建企业级GIS应用。

## 🌟 核心特性

🌏 企业级前端应用框架

应用基于 [Umi](https://umijs.org/) 搭建，享受简单而愉悦的 [React](https://react.dev/) 开发体验。

🌏 专业级地图引擎

地图引擎采用 [ArcGIS](https://developers.arcgis.com/javascript/latest/) ，高性能、多功能、强分析。

## 🌈 丰富的地图微件

#### ArcGIS官方微件

- 日照分析（Daylight）
- 标绘（Sketch）
- 天气（Weather）
- 图例（Legend）
- 测量（AreaMeasurement2D、AreaMeasurement3D、DirectLineMeasurement3D、DistanceMeasurement2D）
- 底图切换（BasemapToggle）
- 指北针（Compass）
- 坐标转换（CoordinateConversion）
- 全屏（Fullscreen）
- 视线分析（LineOfSight）

#### 自定义微件

- 图层树（LayerTree）
- 地图级数控制（ZoomKeeper）
- 视频融合（MediaMixin）
- 点图查询（Identify）

## 📦 如何使用

### 使用脚手架创建项目

```bash
pnpm dlx @geodaoyu/chu-cli@latest create
```

### 启动

```shell
pnpm install
pnpm start
```

## 🤝 参与贡献

如果希望参与到开发中，请遵从我们的[贡献指南](./CONTRIBUTING.md)。

## 📄 开源协议

该项目的代码和文档基于 [MIT license](./LICENSE) 开源协议。
