import FunctionList from '@/components/FunctionList';
import { useViewStore } from '@chu/store';
import { Panel } from '@chu/ui';
import { Flex } from 'antd';
import dataSource from './config';
import styles from './index.less';

const ResourcePage = () => {
  const view = useViewStore((state) => state.view);
  const dataSourceWithView = dataSource({ view });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical={true}></Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical={true}>
          <Panel title="仿真特效">
            <FunctionList dataSource={dataSourceWithView} />
          </Panel>
        </Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
