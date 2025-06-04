import { Card, Empty } from 'antd';

const Panel = ({ title = '', children }) => {
  return <Card title={title}>{children || <Empty description={false} />}</Card>;
};

export default Panel;
