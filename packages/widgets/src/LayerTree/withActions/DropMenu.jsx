import { Dropdown, message } from 'antd';
import { MoreOutlined, HeartOutlined, DeleteOutlined } from '@ant-design/icons';

const DropMenu = () => {
  const items = [
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
    <Dropdown
      menu={{
        items,
      }}
    >
      <MoreOutlined />
    </Dropdown>
  );
};

export default DropMenu;
