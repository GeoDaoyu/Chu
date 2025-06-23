# 图层约定

## 配置

图层配置属性以[api文档](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html)为准，可以加自定义属性。

## 创建图层

ArcGIS的服务，使用官方函数[fromArcGISServerUrl](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fromArcGISServerUrl)创建。

## 图例

默认都展示图例；无须展示的，请设置`legendEnabled: false`。

## 图层列表

默认都展示在图层列表；无须展示的，请设置`listMode：'hide'`。
