import { RightOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';
import styles from './index.less';

const FunctionList = ({ dataSource, goTo }) => {
  return (
    <List
      className={styles.list}
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={({ avatar, title, description, component }) => (
        <List.Item
          actions={[
            <Button
              key="link"
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
          <List.Item.Meta avatar={avatar} title={title} description={description} />
        </List.Item>
      )}
    />
  );
};
export default FunctionList;
