# Toolbar

工具栏组件

`name`属性必须传递，会用作`key`。

```jsx
import { Toolbar } from '@chu/ui';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ZoomVM from '@arcgis/core/widgets/Zoom/ZoomViewModel.js';

const view = {}; // arcgis view
const dataSource = [
  {
    name: 'zoomIn',
    tooltip: 'zoomIn',
    icon: <PlusOutlined />,
    onClick: () => new ZoomVM({ view }).zoomIn(),
  },
  {
    name: 'zoomOut',
    tooltip: 'zoomOut',
    icon: <MinusOutlined />,
    onClick: () => new ZoomVM({ view }).zoomOut(),
  },
];
const App = () => <Toolbar dataSource={dataSource} />;
export default App;
```
