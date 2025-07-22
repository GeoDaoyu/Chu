import { layerControl } from '@chu/middleware';
import { layerTreeStoreCreator, withMiddlewares } from '@chu/store';
import { isEmpty } from 'ramda';
import { Tree, Input, Space, Typography } from 'antd';
import { useMemo, useState } from 'react';

const { Search } = Input;
const { Text } = Typography;

const LayerTreeWithSearch = ({ treeData: originTreeData, getLayerInfo }) => {
  const useLayerTreeStore = useMemo(
    () => withMiddlewares(layerTreeStoreCreator, [layerControl(getLayerInfo(originTreeData))]),
    [originTreeData, getLayerInfo],
  );
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const treeData = useMemo(() => {
    const loop = (data) =>
      data.map((item) => {
        const strTitle = item.title;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <Space>
              <span>
                {beforeStr}
                <Text type="danger">{searchValue}</Text>
                {afterStr}
              </span>
            </Space>
          ) : (
            <Space>
              <span>{strTitle}</span>
            </Space>
          );
        if (item.children) {
          return {
            title,
            key: item.key,
            children: loop(item.children),
          };
        }
        return {
          title,
          key: item.key,
          isLeaf: true,
        };
      });
    return loop(originTreeData);
  }, [originTreeData, searchValue]);

  const onExpand = (newExpandedKeys) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };
  const onSelect = (_, { node }) => {
    const isExpanded = expandedKeys.includes(node.key);

    const newExpandedKeys = isExpanded
      ? expandedKeys.filter((key) => key !== node.key)
      : [...expandedKeys, node.key];

    setExpandedKeys(newExpandedKeys);
  };
  const onChange = (e) => {
    const { value } = e.target;
    const newExpandedKeys = [];
    if (isEmpty(value)) {
      setExpandedKeys(newExpandedKeys);
      setSearchValue(value);
      setAutoExpandParent(true);
      return;
    }
    const loop = (node, parentId = '') => {
      if (node) {
        if (node.title.includes(value)) {
          newExpandedKeys.push(parentId);
        }
        if (node.children) {
          node.children.forEach((child) => loop(child, node.key));
        }
      }
    };
    originTreeData.forEach(loop);
    setExpandedKeys(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  return (
    <div>
      <Search placeholder="请输入关键词搜索" onChange={onChange} />
      <Tree
        checkable
        showIcon
        blockNode
        onSelect={onSelect}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  );
};

export default LayerTreeWithSearch;
