import { Card, Empty } from 'antd';
import styles from './index.less';

export default ({ title = '', chilren = <Empty description={false} /> }) => {
  return (
    <Card className={styles.panel} title={title}>
      {chilren}
    </Card>
  );
};
