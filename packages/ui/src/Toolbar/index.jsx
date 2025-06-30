import { FloatButton } from 'antd';

const Toolbar = ({ dataSource, insetInlineEnd = 20 }) => {
  return (
    <FloatButton.Group shape="square" style={{ insetInlineEnd }}>
      {dataSource.map((v) => (
        <FloatButton {...v} />
      ))}
    </FloatButton.Group>
  );
};

export default Toolbar;
