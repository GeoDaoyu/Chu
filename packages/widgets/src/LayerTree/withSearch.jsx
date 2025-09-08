import { isEmpty } from 'ramda';
import { Input, Space, Typography } from 'antd';
import { useMemo, useState } from 'react';

const { Search } = Input;
const { Text } = Typography;

const withSearch = (LayerTree) => {
  const WithSearch = ({ treeData: originTreeData, getLayerInfo, ...layerTreeRest }) => {
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const treeData = useMemo(() => {
      const loop = (data) =>
        data.map(({ title: strTitle, key, children, ...rest }) => {
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
          if (children) {
            return {
              ...rest,
              title,
              key,
              children: loop(children),
            };
          }
          return {
            ...rest,
            title,
            key,
          };
        });
      return loop(originTreeData);
    }, [originTreeData, searchValue]);

    const onExpand = (newExpandedKeys) => {
      setExpandedKeys(newExpandedKeys);
      setAutoExpandParent(false);
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
        <LayerTree
          {...layerTreeRest}
          treeData={treeData}
          getLayerInfo={getLayerInfo}
          onSelect={onSelect}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        />
      </div>
    );
  };
  return WithSearch;
};

export default withSearch;
