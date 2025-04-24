import { Card, Empty } from 'antd';
import React from 'react';

export default ({ title = '', children = <Empty description={false} /> }) => {
  return <Card title={title}>{children}</Card>;
};
