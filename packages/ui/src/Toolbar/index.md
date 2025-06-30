# Toolbar

工具栏组件

```jsx
import { Toolbar } from '@chu/ui';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ZoomVM from '@arcgis/core/widgets/Zoom/ZoomViewModel.js';

const view = {}; // arcgis view
const dataSource = [
  {
    icon: <PlusOutlined />,
    onClick: () => new ZoomVM({ view }).zoomIn(),
  },
  {
    icon: <MinusOutlined />,
    onClick: () => new ZoomVM({ view }).zoomOut(),
  },
];
const App = () => <Toolbar dataSource={dataSource} />;
export default App;
```
