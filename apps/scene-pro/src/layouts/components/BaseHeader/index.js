import styles from './index.less';
import { Layout, Typography } from 'antd';

const { Title } = Typography;
const { Header } = Layout;

const defaultTitle = 'Chu';

const BaseHeader = ({ children }) => {
  return (
    <Header className={styles.header}>
      <Title className={styles.title}>{window.appcfg.title || defaultTitle}</Title>
      {children}
    </Header>
  );
};
export default BaseHeader;
