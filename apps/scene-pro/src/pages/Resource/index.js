import Panel from '@chu/ui/Panel';
import LayerTree, { withSearch, withActions } from '@chu/widgets/LayerTree';
import useLayerTreeStore from '@chu/store/useLayerTreeStore';
import { Flex, message } from 'antd';
import { compose } from 'ramda';
import styles from './index.less';
import { filter, propEq } from 'ramda';
import config from './config';
import { HeartOutlined, DeleteOutlined } from '@ant-design/icons';

const EnhancedLayerTree = compose(withSearch, withActions)(LayerTree);

const ResourcePage = () => {
  const { treeData } = useLayerTreeStore();

  const items = filter(propEq('right', 'position'))(config);
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

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="large" vertical>
          <Panel title="目录树">
            <EnhancedLayerTree dropMenuItems={dropMenuItems} treeData={treeData} />
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
