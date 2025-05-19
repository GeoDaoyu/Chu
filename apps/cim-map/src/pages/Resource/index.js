import { useViewStore } from '@chu/store';
import { Panel } from '@chu/ui';
import { LayerList, LayerTree } from '@chu/widgets';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { getLayerTree } from './service.js';

const ResourcePage = () => {
  const view = useViewStore((state) => state.view);
  const [treeData, setTreeData] = useState([]);
  useEffect(() => {
    getLayerTree().then(({ data }) => setTreeData(data));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical={true}>
          <Panel title="目录树">
            <LayerTree view={view} treeData={treeData} />
          </Panel>
        </Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical={true}>
          <Panel title="图层列表">
            <LayerList view={view} />
          </Panel>
        </Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
