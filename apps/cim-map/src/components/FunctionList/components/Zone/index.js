import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default ({ goBack, children }) => {
  return (
    <div>
      <Button type="link" icon={<LeftOutlined />} onClick={goBack}>
        返回
      </Button>
      {children}
    </div>
  );
};
