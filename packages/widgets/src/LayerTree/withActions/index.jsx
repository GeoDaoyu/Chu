import { GlobalOutlined } from '@ant-design/icons';
import { goToFullExtent } from '@chu/lib';
import useViewStore from '@chu/store/useViewStore';
import { Space } from 'antd';
import { useMemo } from 'react';
import DropMenu from './DropMenu';
import styles from './index.less';

const withActions = (LayerTree) => {
  const WithActions = ({
    treeData: originTreeData,
    getLayerInfo,
    dropMenuItems = [],
    ...layerTreeRest
  }) => {
    const view = useViewStore((state) => state.view);
    const treeData = useMemo(() => {
      const loop = (data) =>
        data.map(({ children, key, ...rest }) => {
          const icon =
            children && children.length ? null : (
              <Space>
                <GlobalOutlined
                  onClick={(e) => {
                    e.stopPropagation();
                    goToFullExtent(view, key);
                  }}
                />
                <DropMenu items={dropMenuItems} />
              </Space>
            );

          if (icon) {
            return { ...rest, key, isLeaf: true, icon };
          } else {
            return { ...rest, key, isLeaf: false, children: loop(children) };
          }
        });

      return loop(originTreeData);
    }, [originTreeData, dropMenuItems, view]);

    return (
      <div className={styles.container}>
        <LayerTree
          {...layerTreeRest}
          treeData={treeData}
          getLayerInfo={getLayerInfo}
          showIcon
          blockNode
        />
      </div>
    );
  };
  return WithActions;
};

export default withActions;
