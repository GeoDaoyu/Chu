React19在GIS框架下的最佳实践

## React页面部分

与传统React无异

有结果展示的，比如列表，使用`useState`

有页面交互的，比如Input输入，使用`useState`

## 地图交互部分

获取地图`view`，使用`useStore`

声明`widget`或`widgetViewModel`，使用`useRef`

声明图层，使用`useRef`

## 同步

页面往地图同步，比如图层上图，使用`useEffect`和事件绑定

地图往页面同步，比如绘制，使用事件监听和`useEffectEvent`

## 文件夹结构

对组件的目录也做了约定，图片统一放`images`，配置统一放`config.js`等：

```plain
.
├── components                          // 微件内部的组件，比如一个微件可以拆分出-
│   └── MyComponent                     // 操作部分和结果部分
│   		├── index.(js|jsx)              // 子组件的结构递归
│   		└── index.less
├── withCustomComponent                 // 如果有高阶组件，和useHooks是平级
│   ├── index.(js|jsx)                  // 高阶组件的结构递归
│   └── index.less
├── images                              // 图片，一般是用在样式的图片
├── assets                              // 附件，一般是地图相关的资源，比如gltf
├── viewModel.js                        // 分析工具对应ViewModel
├── useCustomHooksA.js                  // 比如绘制useSketch
├── useCustomHooksB.js                  // hooks可以有多个，比如useLayer
├── config.js                           // 配置文件，比如服务地址、表格列
├── index.(js|jsx)                      // 主文件
└── index.less                          // 样式文件
```
