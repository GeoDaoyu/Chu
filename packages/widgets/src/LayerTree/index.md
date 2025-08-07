# LayerTree

Usage:

```jsx
import { LayerTree } from '@chu/widgets';

const App = () => <LayerTree treeData={treeData} getLayerInfo={getLayerInfo(treeData)} />;
export default App;
```

> note:
>
> 1. get `view` form `store`.
> 2. provider `getLayerInfo` function by app

Enhance：

withSearch

```jsx
import { LayerTree, withSearch } from '@chu/widgets';

const Tree = withSearch(LayerTree);
const App = () => <Tree treeData={treeData} getLayerInfo={getLayerInfo(treeData)} />;
export default App;
```

**getLayerInfo** :

a. from treeData

```js
const findNode = (node, key) => {
  if (node.key === key) {
    return node;
  }

  if (node.children) {
    for (const child of node.children) {
      const found = findNode(child, key);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

const getLayerInfo = (treeData) => (key) => {
  const node = findNode({ children: treeData }, key);
  return node;
};

export default getLayerInfo;
```

b: from services

```js
export function getLayerInfoByCode(layercode) {
  return request(`${apiRoot}/listByCode`, {
    method: 'get',
    params: { layercode },
  });
}
```
