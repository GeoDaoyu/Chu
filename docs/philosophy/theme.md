# Theme方案

## Ant Design

[antd](https://ant-design.antgroup.com/index-cn) v5提倡使用token来[定制主题](https://ant-design.antgroup.com/docs/react/customize-theme-cn)。

Chu使用Umi的`rootContainer`函数来使用Antd Token。

示例核心代码：

```js
export function rootContainer(container) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      {container}
    </ConfigProvider>
  );
}
```

## Calcite

Esri使用`Calcite`作为UI库，`Calcite`也提供了[token](https://developers.arcgis.com/calcite-design-system/foundations/colors/#theming)。在ArcGIS JS API中通过[修改css](https://developers.arcgis.com/javascript/latest/building-your-ui/#theming-with-css-variables)来实现主题配色。

Chu通过外部样式文件覆盖的形式来使用Calcite CSS variables。

示例核心代码：

```js
export default defineConfig({
  styles: ['./assets/esri/themes/light/main.css', './css/overrides-calcite.css'],
});
```

样式示例：

```css
body {
  --calcite-color-brand: #8f4a89;
  --calcite-color-brand-hover: #823b7c;
  --calcite-color-brand-press: #7d3b77;
}
body.calcite-mode-dark {
  --calcite-color-brand: #d6b9eb;
  --calcite-color-brand-hover: #c59cd6;
  --calcite-color-brand-press: #b399c4;
}
#infoPanel {
  --calcite-color-brand: #71c96e;
  --calcite-color-brand-hover: #67b564;
}
```
