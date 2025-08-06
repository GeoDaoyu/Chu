import { useViewStore } from '@chu/store';
import { Panel } from '@chu/ui';
import { LayerList, LayerTree, withSearch, Legend } from '@chu/widgets';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { getLayerTree } from './service.js';
import getLayerInfo from '@/utils/getLayerInfo';

const Tree = withSearch(LayerTree);

const ResourcePage = () => {
  const view = useViewStore((state) => state.view);
  const [treeData, setTreeData] = useState([]);
  useEffect(() => {
    getLayerTree().then(({ data }) => setTreeData(data));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical>
          <Panel title="目录树">
            <Tree treeData={treeData} getLayerInfo={getLayerInfo} />
          </Panel>
        </Flex>
      </div>
      <div className={styles.right}>
        <Flex gap="large" vertical>
          <Panel title="图层列表">
            <LayerList view={view} />
          </Panel>
          <Panel title="图例">
            <Legend view={view} />
          </Panel>
        </Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
