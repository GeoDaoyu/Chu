import useViewStore from '@/stores/useViewStore.js';
import { Panel } from '@chu/ui';
import { Flex } from 'antd';
import { filter, propEq } from 'ramda';
import config from './config';
import styles from './index.less';

const HomePage = () => {
  const view = useViewStore((state) => state.view);
  const configWithView = config({ view });
  const leftItem = filter(propEq('left', 'position'))(configWithView);
  const rightItem = filter(propEq('right', 'position'))(configWithView);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical={true}>
          {leftItem.map(({ title, component }) => (
            <Panel key={title} title={title}>
              {component}
            </Panel>
          ))}
        </Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical={true}>
          {rightItem.map(({ title, component }) => (
            <Panel key={title} title={title}>
              {component}
            </Panel>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
