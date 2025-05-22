import { useState } from 'react';
import List from './components/List';
import Zone from './components/Zone';
import dataSource from './config';
import styles from './index.less';

export default ({ view }) => {
  const [activeItem, setActiveItem] = useState();
  const dataSourceWithView = dataSource({ view });

  return (
    <div className={styles.container}>
      {activeItem ? (
        <Zone goBack={() => setActiveItem(null)}>{activeItem}</Zone>
      ) : (
        <List dataSource={dataSourceWithView} goTo={setActiveItem} />
      )}
    </div>
  );
};
