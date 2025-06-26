import { useState } from 'react';
import List from './components/List';
import Zone from './components/Zone';
import styles from './index.less';

const FunctionList = ({ dataSource }) => {
  const [activeItem, setActiveItem] = useState();

  return (
    <div className={styles.container}>
      {activeItem ? (
        <Zone goBack={() => setActiveItem(null)}>{activeItem}</Zone>
      ) : (
        <List dataSource={dataSource} goTo={setActiveItem} />
      )}
    </div>
  );
};

export default FunctionList;
