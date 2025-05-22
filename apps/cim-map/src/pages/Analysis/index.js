import FunctionList from '@/components/FunctionList';
import { useViewStore } from '@chu/store';
import { Panel } from '@chu/ui';
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
        <Flex gap="large" vertical={true}>
          <Panel title="空间分析">
            <FunctionList view={view} />
          </Panel>
        </Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
