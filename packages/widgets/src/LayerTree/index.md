# LayerTree

Usage:

```jsx
import { LayerTree } from '@chu/widgets';

const App = () => <LayerTree treeData={treeData} getLayerInfo={getLayerInfo} />;
export default App;
```

> note: get `view` form `store`.

Enhance：

withSearch

```jsx
import { LayerTree, withSearch } from '@chu/widgets';

const Tree = withSearch(LayerTree);
const App = () => <Tree treeData={treeData} getLayerInfo={getLayerInfo} />;
export default App;
```
