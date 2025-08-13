import { FunctionList, Panel } from '@chu/ui';
import { Flex } from 'antd';
import dataSource from './config';
import styles from './index.less';

const ResourcePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical />
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical>
          <Panel title="空间分析">
            <FunctionList dataSource={dataSource} />
          </Panel>
        </Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
