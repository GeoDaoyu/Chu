import getLayerInfo from '@/utils/getLayerInfo';
import useViewStore from '@chu/store/useViewStore';
import Panel from '@chu/ui/Panel';
import LayerList from '@chu/widgets/LayerList';
import LayerTree, { withActions, withSearch } from '@chu/widgets/LayerTree';
import Legend from '@chu/widgets/Legend';
import { Flex } from 'antd';
import { compose } from 'ramda';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { getLayerTree } from './service.js';

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
