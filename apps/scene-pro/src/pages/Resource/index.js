import Panel from '@chu/ui/Panel';
import LayerTree, { withSearch, withActions } from '@chu/widgets/LayerTree';
import { Flex, message } from 'antd';
import { useEffect, useState } from 'react';
import { compose } from 'ramda';
import styles from './index.less';
import { getLayerTree } from './service.js';
import getLayerInfo from '@/utils/getLayerInfo';
import { filter, propEq } from 'ramda';
import config from './config';
import { HeartOutlined, DeleteOutlined } from '@ant-design/icons';

const EnhancedLayerTree = compose(withSearch, withActions)(LayerTree);

const ResourcePage = () => {
  const items = filter(propEq('right', 'position'))(config);
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
          {items.map(({ title, component }) => (
            <Panel key={title} title={title}>
              {component}
            </Panel>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default ResourcePage;
