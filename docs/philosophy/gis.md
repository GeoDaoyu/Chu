# 地理引擎

Chu使用的地理引擎是[ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/)。它是一个十分优秀的地理引擎，功能强大。

Chu对ArcGIS API进行了简单的处理，写在下面，提供给开发者做参考。

## 依赖

pnpm安装依赖

```json
{
  "dependencies": {
    "@arcgis/core": "^4.31.6"
  }
}
```

## 静态资源

使用本地静态资源

```json
{
  "scripts": {
    "copy": "cpx ./node_modules/@arcgis/core/assets/**/*.* ./public/assets/",
    "postinstall": "max setup && npm run copy"
  }
}
```

设置`assetsPath`

```javascript
import esriConfig from '@arcgis/core/config.js';

esriConfig.assetsPath = './assets';
```

记得忽略git

```plain
/public/assets
```

## 样式文件

```javascript
export default defineConfig({
  styles: ['./assets/esri/themes/light/main.css'],
});
```

把css塞到html的header中，跳过Umi的打包。

在`overrides.(css|less|sass|scss)`中覆盖样式。
