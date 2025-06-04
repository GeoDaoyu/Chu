import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Zone = ({ goBack, children }) => {
  return (
    <div>
      <Button type="link" icon={<LeftOutlined />} onClick={goBack}>
        返回
      </Button>
      {children}
    </div>
  );
};

export default Zone;
