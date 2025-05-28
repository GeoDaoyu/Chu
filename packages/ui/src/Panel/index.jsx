import { Card, Empty } from 'antd';

const Panel = ({ title = '', children = <Empty description={false} /> }) => {
  return <Card title={title}>{children}</Card>;
};

export default Panel;
