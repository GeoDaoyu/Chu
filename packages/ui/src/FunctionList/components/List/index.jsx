import { RightOutlined } from '@ant-design/icons';
import { Button, Listy } from 'antd';
import styles from './index.less';

const FunctionList = ({ dataSource, goTo }) => {
  return (
    <Listy
      className={styles.list}
      height="calc(100vh - 240px)"
      virtual={false}
      items={dataSource}
      rowKey="key"
      itemRender={({ avatar, title, description, component }) => (
        <div className={styles.item}>
          <div className={styles.meta}>
            <div className={styles.avatar}>{avatar}</div>
            <div className={styles.content}>
              <div className={styles.title}>{title}</div>
              {description && <div className={styles.description}>{description}</div>}
            </div>
          </div>
          <Button
            type="link"
            icon={<RightOutlined />}
            iconPosition="end"
            disabled={!component}
            onClick={() => goTo(component)}
          >
            立即使用
          </Button>
        </div>
      )}
    />
  );
};
export default FunctionList;
