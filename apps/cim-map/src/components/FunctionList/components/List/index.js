import { RightOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';

export default ({ dataSource, goTo }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={({ avatar, title, description, component }) => (
        <List.Item
          actions={[
            <Button
              type="link"
              icon={<RightOutlined />}
              iconPosition="end"
              disabled={!component}
              onClick={() => goTo(component)}
            >
              立即使用
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={avatar}
            title={title}
            description={description}
          />
        </List.Item>
      )}
    />
  );
};
