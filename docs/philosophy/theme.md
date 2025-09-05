# Theme方案

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

Esri使用`Calcite`作为UI库，`Calcite`也提供了[token](https://developers.arcgis.com/calcite-design-system/foundations/colors/#theming)。不同于antd，`Calcite`是通过修改css来实现。

示例核心代码：

```css
<style>
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
</style>
```
