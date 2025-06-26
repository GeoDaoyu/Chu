# 布局与菜单

## 布局

地图项目不同于后台管理项目，是以地图模块为主导，地图占据了页面的大部分。基于路由的布局更像是悬浮在地图之上的。

所以Chu禁用了Umi的[默认布局](https://umijs.org/docs/max/layout-menu)，在`src/layout/index.js`中写了一张图的布局。

核心逻辑是在`src/layout/index.js`控制Map组件和路由组件（Outlet）的加载。
当Map组件中`view`实例化之后才会加载路由组件。

```js
import { useModel } from '@umijs/max';
import { Layout } from 'antd';
import { Outlet } from 'umi';
import Map from '@/widgets/Map';
import styles from './index.less';

const { Header, Content } = Layout;

export default function BasicLayout() {
  const { view } = useModel('global');

  return (
    <Layout>
      <Header className={styles.header}>Header</Header>
      <Content>
        <div className={styles.container}>
          <Map />
          {view && <Outlet view={view} />}
        </div>
      </Content>
    </Layout>
  );
}
```

## 菜单

没有了Umi的loyout，菜单配置也就不再生效。

幸好Umi提供了一些方式可以获取到routes配置和location。所以在Chu中简单的实现自己的菜单。Chu在设计菜单参数时也尽量参考Umi的[配置](https://umijs.org/docs/max/layout-menu)，避免了开发者的学习成本。

这里给一个实例参考：

```js
import { history, useAppData, useLocation } from '@umijs/max';
import { Menu } from 'antd';
import { compose, filter, map, values } from 'ramda';
import styles from './index.less';

const RouteMenu = () => {
  const location = useLocation();
  const { routes } = useAppData();
  const items = compose(
    map(({ name, path }) => ({ label: name, key: path })),
    filter(({ hideInMenu }) => !hideInMenu),
    filter(({ name }) => name),
    values,
  )(routes);
  const current = location.pathname;
  const onClick = (e) => {
    history.push(e.key);
  };
  return (
    <div className={styles.container}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        disabledOverflow={true}
      />
    </div>
  );
};

export default RouteMenu;
```
