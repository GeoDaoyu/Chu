import { Space } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import DropMenu from './DropMenu';
import { useMemo } from 'react';
import { goToFullExtent } from '@chu/lib';
import { useViewStore } from '@chu/store';

const withActions = (LayerTree) => {
  const WithActions = ({ treeData: originTreeData, getLayerInfo }) => {
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
                <DropMenu />
              </Space>
            );

          if (icon) {
            return { ...rest, isLeaf: true, icon };
          } else {
            return { ...rest, isLeaf: false, children: loop(children) };
          }
        });

      return loop(originTreeData);
    }, [originTreeData, view]);

    return <LayerTree treeData={treeData} getLayerInfo={getLayerInfo} showIcon />;
  };
  return WithActions;
};

export default withActions;
