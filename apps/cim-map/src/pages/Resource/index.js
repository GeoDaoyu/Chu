import { useViewStore } from '@chu/store';
import { Panel } from '@chu/ui';
import { LayerList, LayerTree, withSearch, Legend, withActions } from '@chu/widgets';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { compose } from 'ramda';
import styles from './index.less';
import { getLayerTree } from './service.js';
import getLayerInfo from '@/utils/getLayerInfo';

const EnhancedLayerTree = compose(withSearch, withActions)(LayerTree);

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
            <EnhancedLayerTree treeData={treeData} getLayerInfo={getLayerInfo(treeData)} />
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
