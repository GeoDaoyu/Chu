# Antd Theme方案

[antd](https://ant-design.antgroup.com/index-cn) v5提倡使用token来[定制主题](https://ant-design.antgroup.com/docs/react/customize-theme-cn)。

Chu使用Umi的`rootContainer`函数来使用Antd Token。

示例核心代码：

```js
export function rootContainer(container) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      {container}
    </ConfigProvider>
  );
}
```
