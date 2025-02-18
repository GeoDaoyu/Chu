import { Collapse } from 'antd';
import { defaultItems } from './config';
import styles from './index.less';

export default ({ items }) => {
  return (
    <div className={styles.container}>
      <Collapse accordion items={[...defaultItems, ...items]} />
    </div>
  );
};
