# FunctionList

功能列表组件

```jsx
import { FunctionList } from '@chu/ui';
import { DashboardOutlined, DatabaseOutlined, ExperimentOutlined } from '@ant-design/icons';

const mediaLayerConfig = {
  // ...
};
const view = {}; // arcgis view
const dataSource = [
  {
    key: '1',
    title: '视频融合',
    avatar: <PlayCircleOutlined />,
    component: <MediaMixin mediaLayerConfig={mediaLayerConfig} view={view} />,
  },
  {
    key: '2',
    title: '天气',
    avatar: <DashboardOutlined />,
    component: <Weather view={view} />,
  },
  {
    key: '3',
    title: '交通流量',
    avatar: <DatabaseOutlined />,
    component: undefined,
  },
];
const App = () => <FunctionList dataSource={dataSource} />;
export default App;
```
