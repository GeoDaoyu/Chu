# 目录树设计与图层加载

## 需求

目录树的功能是多变的，可能以下的功能都需要实现

- 查询 [antd 示例](https://ant-design.antgroup.com/components/tree-cn#tree-demo-search)
- 懒加载 [antd示例](https://ant-design.antgroup.com/components/tree-cn#tree-demo-dynamic)
- 拖拽 [antd示例](https://ant-design.antgroup.com/components/tree-cn#tree-demo-draggable)
- 自定义图标 [antd示例](https://ant-design.antgroup.com/components/tree-cn#tree-demo-customized-icon)
- 默认勾选
- 节点操作，如 缩放至、 属性表等
- 联动，其他组件开关图层，同步给目录树
- 统计数值，比如xx类型(12个)
- 支持Group

图层加载的逻辑也是多变的，可能要满足以下情况

- 加载服务，同时加载关联服务（查询服务关联）
- 加载三维服务，同时加载二维服务（二三维关联）

数据源也是多变的，可能来自

- 配置文件：树
- 接口：树
- ~~接口：目录树+图层列表，前端构建树~~
- 接口：树 + 图层信息

## 图层控制

根据目录树的勾选，去加载/卸载图层。

## 设计思路

通过中间件，把**视图**、**数据获取**和**图层控制**逻辑做区分。

## 实现过程

### store

先写store，store中只处理checkedKeys状态，非常纯净。

```javascript
import { create } from 'zustand';

export const layerTreeStoreCreator = (set) => ({
  checkedKeys: [],
  setCheckedKeys: (newCheckedKeys) => set({ checkedKeys: newCheckedKeys }),
});

export const useLayerTreeStore = create(layerTreeStoreCreator);
```

### middleware

再写中间件，

1. `view`通过`useViewStore.getState`获取，所以`LayerTree`不需要`view`的传参。
2. 因为要分离**数据获取**，`layerControl`中间件比普通中间件多了一层`getLayerInfo`函数的传递。
3. Zustand的中间件写法和Dva的略有不同。需要从args[key]判断命中。

```js
import { difference } from 'ramda';
import { addLayer, hasLayer, removeLayer } from '@chu/lib';
import useViewStore from '@chu/store/useViewStore';

const { view } = useViewStore.getState();

// 需要app中传递getLayerInfo函数
const layerControl = (getLayerInfo) => (config) => (set, get, api) =>
  config(
    (...args) => {
      const [{ checkedKeys: newValue }] = args;
      // 命中 setCheckedKeys
      if (newValue) {
        const { checkedKeys: oldValue } = get();
        const addKeys = difference(newValue, oldValue);
        const removeKeys = difference(oldValue, newValue);

        addKeys.forEach((key) => {
          if (!hasLayer(view, key)) {
            const layerInfo = getLayerInfo(key);
            addLayer(view, layerInfo);
          }
        });

        removeKeys.forEach((key) => removeLayer(view, key));
      }

      set(...args);
    },
    get,
    api,
  );

export default layerControl;
```

### lib

图层控制方法写到lib中，这部分可以按业务修改。

```javascript
import Layer from '@arcgis/core/layers/Layer';
import createLayer from './createLayer';
import { cond, has, T } from 'ramda';

export const hasLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  return !!layer;
};

export const addLayer = async (view, layerInfo) => {
  if (!layerInfo) {
    return;
  }
  const { key, url, type, ...rest } = layerInfo;
  const layer = cond([
    [has('type'), () => createLayer({ id: key, ...layerInfo })],
    [has('url'), () => Layer.fromArcGISServerUrl({ url, properties: { id: key, ...rest } })],
    [T, () => new Layer({ id: key, ...rest })],
  ])(layerInfo);
  view.map.add(layer);
};

export const removeLayer = (view, id) => {
  const layer = view.map.findLayerById(id);
  view.map.remove(layer);
};
```

### widgets

在widgets中引入store和middleware，创建视图。

```javascript
import { layerControl } from '@chu/middleware';
import { layerTreeStoreCreator, withMiddlewares } from '@chu/store';
import { Tree } from 'antd';
import { useMemo } from 'react';

const LayerTree = ({ treeData, getLayerInfo, ...rest }) => {
  const useLayerTreeStore = useMemo(
    () => withMiddlewares(layerTreeStoreCreator, [layerControl(getLayerInfo)]),
    [getLayerInfo],
  );
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  return (
    <Tree {...rest} checkable onCheck={onCheck} checkedKeys={checkedKeys} treeData={treeData} />
  );
};

export default LayerTree;
```

通过**HOC**的方式，可以对`LayerTree`进行功能增强。此处以查询图层树为例：

```js
import { isEmpty } from 'ramda';
import { Input, Space, Typography } from 'antd';
import { useMemo, useState } from 'react';

const { Search } = Input;
const { Text } = Typography;

const withSearch = (LayerTree) => {
  const WithSearch = ({ treeData: originTreeData, getLayerInfo }) => {
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const treeData = useMemo(() => {
      const loop = (data) =>
        data.map((item) => {
          const strTitle = item.title;
          const index = strTitle.indexOf(searchValue);
          const beforeStr = strTitle.substring(0, index);
          const afterStr = strTitle.slice(index + searchValue.length);
          const title =
            index > -1 ? (
              <Space>
                <span>
                  {beforeStr}
                  <Text type="danger">{searchValue}</Text>
                  {afterStr}
                </span>
              </Space>
            ) : (
              <Space>
                <span>{strTitle}</span>
              </Space>
            );
          if (item.children) {
            return {
              title,
              key: item.key,
              children: loop(item.children),
            };
          }
          return {
            title,
            key: item.key,
            isLeaf: true,
          };
        });
      return loop(originTreeData);
    }, [originTreeData, searchValue]);

    const onExpand = (newExpandedKeys) => {
      setExpandedKeys(newExpandedKeys);
      setAutoExpandParent(false);
    };
    const onSelect = (_, { node }) => {
      const isExpanded = expandedKeys.includes(node.key);

      const newExpandedKeys = isExpanded
        ? expandedKeys.filter((key) => key !== node.key)
        : [...expandedKeys, node.key];

      setExpandedKeys(newExpandedKeys);
    };
    const onChange = (e) => {
      const { value } = e.target;
      const newExpandedKeys = [];
      if (isEmpty(value)) {
        setExpandedKeys(newExpandedKeys);
        setSearchValue(value);
        setAutoExpandParent(true);
        return;
      }
      const loop = (node, parentId = '') => {
        if (node) {
          if (node.title.includes(value)) {
            newExpandedKeys.push(parentId);
          }
          if (node.children) {
            node.children.forEach((child) => loop(child, node.key));
          }
        }
      };
      originTreeData.forEach(loop);
      setExpandedKeys(newExpandedKeys);
      setSearchValue(value);
      setAutoExpandParent(true);
    };

    return (
      <div>
        <Search placeholder="请输入关键词搜索" onChange={onChange} />
        <LayerTree
          treeData={treeData}
          getLayerInfo={getLayerInfo}
          showIcon
          blockNode
          onSelect={onSelect}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        />
      </div>
    );
  };
  return WithSearch;
};

export default withSearch;
```

### app

最后是在应用中的使用，

```javascript
import useViewStore from '@chu/store/useViewStore';
import { Panel } from '@chu/ui';
import { LayerList, LayerTree, withSearch, Legend } from '@chu/widgets';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { getLayerTree } from './service.js';
import getLayerInfo from '@/utils/getLayerInfo';

const LayerTreeWithSearch = withSearch(LayerTree);

const ResourcePage = () => {
  const view = useViewStore((state) => state.view);
  const [treeData, setTreeData] = useState([]);
  useEffect(() => {
    getLayerTree().then(({ data }) => setTreeData(data));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical>
          <Panel title="目录树">
            <LayerTreeWithSearch treeData={treeData} getLayerInfo={getLayerInfo(treeData)} />
          </Panel>
        </Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical>
          <Panel title="图层列表">
            <LayerList view={view} />
          </Panel>
          <Panel title="图例">
            <Legend view={view} />
          </Panel>
        </Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
```

## 附件

补充treeData的样例，key是唯一编码，可以给目录count属性，做统计用。

```javascript
const data = [
  {
    key: '0f4621',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
    title: '地震',
    type: 'geojson',
  },
  {
    key: 'dfa297',
    title: '组',
    type: 'group',
    layers: [
      {
        key: '1fdaih',
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
        title: '地震1',
        type: 'geojson',
      },
      {
        key: '2dfudh',
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0',
        title: '树木',
      },
    ],
  },
  {
    title: '要素服务',
    key: '3f4d6d',
    count: 2,
    children: [
      {
        key: 'f98djk',
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0',
        title: '树木',
      },
      {
        key: 'dfssff',
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/128peaks/FeatureServer',
        title: '山峰',
      },
    ],
  },
  {
    title: '动态服务',
    key: '112jdf',
    count: 1,
    children: [
      {
        key: 'ffi132',
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/MapServer',
        title: 'DamageAssessment',
      },
    ],
  },
  {
    title: '切片服务',
    key: '39fjhh',
    count: 2,
    children: [
      {
        key: 'fuie38',
        url: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer',
        title: '全球矢量切片',
      },
      {
        key: 'fu887d',
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer',
        title: '地形切片',
      },
    ],
  },
  {
    title: '三维服务',
    key: '3ofhuu',
    count: 4,
    children: [
      {
        key: 'dfjkkd',
        url: 'https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Esri_Admin_Building/SceneServer',
        title: '建筑',
      },
      {
        key: 'dfiijh',
        url: 'https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BARNEGAT_BAY_LiDAR_UTM/SceneServer',
        title: '点云',
      },
      {
        key: 'wejihh',
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Paris_3D_Local_WSL2/SceneServer',
        title: '场景',
      },

      {
        key: '2ihfh9',
        url: 'https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Buildings_Frankfurt_2021/SceneServer',
        title: '倾斜',
      },
    ],
  },
];
```

## 高阶

**HOC**组件组合，如，再增加一个`withActions`的组件。

```js
import { Space } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import DropMenu from './DropMenu';
import { useMemo } from 'react';
import { goToFullExtent } from '@chu/lib';
import useViewStore from '@chu/store/useViewStore';

const withActions = (LayerTree) => {
  const WithActions = ({ treeData: originTreeData, getLayerInfo }) => {
    const view = useViewStore((state) => state.view);
    const treeData = useMemo(() => {
      const loop = (data) =>
        data.map(({ children, key, ...rest }) => {
          const icon =
            children && children.length ? null : (
              <Space>
                <GlobalOutlined
                  onClick={(e) => {
                    e.stopPropagation();
                    goToFullExtent(view, key);
                  }}
                />
                <DropMenu />
              </Space>
            );

          if (icon) {
            return { ...rest, isLeaf: true, icon };
          } else {
            return { ...rest, isLeaf: false, children: loop(children) };
          }
        });

      return loop(originTreeData);
    }, [originTreeData, view]);

    return <LayerTree treeData={treeData} getLayerInfo={getLayerInfo} showIcon />;
  };
  return WithActions;
};

export default withActions;
```

通过compose来组合，生成一个既有查询也有操作的`LayerTree`:

```js
import useViewStore from '@chu/store/useViewStore';
import { Panel } from '@chu/ui';
import { LayerList, LayerTree, withSearch, Legend, withActions } from '@chu/widgets';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { compose } from 'ramda';
import styles from './index.less';
import { getLayerTree } from './service.js';
import getLayerInfo from '@/utils/getLayerInfo';

const EnhancedLayerTree = compose(withSearch, withActions)(LayerTree);

const ResourcePage = () => {
  const view = useViewStore((state) => state.view);
  const [treeData, setTreeData] = useState([]);
  useEffect(() => {
    getLayerTree().then(({ data }) => setTreeData(data));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical>
          <Panel title="目录树">
            <EnhancedLayerTree treeData={treeData} getLayerInfo={getLayerInfo(treeData)} />
          </Panel>
        </Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical>
          <Panel title="图层列表">
            <LayerList view={view} />
          </Panel>
          <Panel title="图例">
            <Legend view={view} />
          </Panel>
        </Flex>
      </div>
    </div>
  );
};
```
