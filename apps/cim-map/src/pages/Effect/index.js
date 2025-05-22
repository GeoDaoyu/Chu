import { useViewStore } from '@chu/store';
import { Flex } from 'antd';
import styles from './index.less';

const ResourcePage = () => {
  const view = useViewStore((state) => state.view);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical={true}></Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical={true}></Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
