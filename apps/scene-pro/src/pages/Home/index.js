import useViewStore from '@chu/store/useViewStore';
import Panel from '@chu/ui/Panel';
import { Flex } from 'antd';
import { filter, propEq } from 'ramda';
import config from './config';
import styles from './index.less';

const HomePage = () => {
  const view = useViewStore((state) => state.view);
  const configWithView = config({ view });
  const leftItems = filter(propEq('left', 'position'))(configWithView);
  const rightItems = filter(propEq('right', 'position'))(configWithView);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical>
          {leftItems.map(({ title, component }) => (
            <Panel key={title} title={title}>
              {component}
            </Panel>
          ))}
        </Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical>
          {rightItems.map(({ title, component }) => (
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
