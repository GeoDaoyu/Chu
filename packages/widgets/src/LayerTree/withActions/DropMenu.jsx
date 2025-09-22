import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const DropMenu = ({ items }) => {
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
