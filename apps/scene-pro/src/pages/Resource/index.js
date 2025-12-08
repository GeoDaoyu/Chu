import useViewStore from '@chu/store/useViewStore';
import Panel from '@chu/ui/Panel';
import LayerTree, { withSearch, withActions } from '@chu/widgets/LayerTree';
import LayerList from '@chu/widgets/LayerList';
import Legend from '@chu/widgets/Legend';
import { Flex, message } from 'antd';
import { useEffect, useState } from 'react';
import { compose } from 'ramda';
import styles from './index.less';
import { getLayerTree } from './service.js';
import getLayerInfo from '@/utils/getLayerInfo';
import { HeartOutlined, DeleteOutlined } from '@ant-design/icons';

const EnhancedLayerTree = compose(withSearch, withActions)(LayerTree);

const ResourcePage = () => {
  const view = useViewStore((state) => state.view);
  const [treeData, setTreeData] = useState([]);
  const dropMenuItems = [
    {
      label: '收藏',
      icon: <HeartOutlined />,
      key: 'favorite',
      onClick: () => {
        message.success(`收藏成功`);
      },
    },
    {
      label: '删除',
      icon: <DeleteOutlined />,
      key: 'delete',
      onClick: () => {
        message.success(`删除`);
      },
    },
  ];
  useEffect(() => {
    getLayerTree().then(({ data }) => setTreeData(data));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical>
          <Panel title="目录树">
            <EnhancedLayerTree
              treeData={treeData}
              getLayerInfo={getLayerInfo(treeData)}
              dropMenuItems={dropMenuItems}
            />
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
