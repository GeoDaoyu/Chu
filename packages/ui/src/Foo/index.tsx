import { Typography } from 'antd';
import React, { type FC } from 'react';

const { Title } = Typography;

const Foo: FC<{ title: string }> = (props) => (
  <Title level={3}>{props.title}</Title>
);

export default Foo;
