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
        disabledOverflow
      />
    </div>
  );
};

export default RouteMenu;
