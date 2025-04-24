import { history, useLocation } from '@umijs/max';
import { Menu } from 'antd';
import items from './config';
import styles from './index.less';

const RouteMenu = () => {
  const location = useLocation();
  const current = location.pathname;
  console.log(current);
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
      />
    </div>
  );
};
export default RouteMenu;
