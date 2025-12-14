import { history, useModel } from '@umijs/max';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { setAuthority } from '@/utils/authority';
import { getRole, login } from './service.js';
import styles from './index.less';

const Login = () => {
  const { setInitialState } = useModel('@@initialState');

  const handleSubmit = async () => {
    const user = await login();
    const role = await getRole();
    setInitialState({
      name: user.data.name,
      user: user.data,
      role: role.data,
    });
    setAuthority({
      name: user.data.name,
      user: user.data,
      role: role.data,
    });
    // 跳转回home页面
    history.push('/home');
  };

  const [form] = Form.useForm();

  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <Card
          className={styles.loginCard}
          title={
            <div className={styles.loginLogo}>
              <img alt="logo" src="/logo.svg" className={styles.loginLogoImg} />
              <span>Chu</span>
            </div>
          }
          extra={
            <div className={styles.loginSubtitle}>
              <div>现代的WebGIS框架</div>
            </div>
          }
        >
          <Form
            form={form}
            initialValues={{
              autoLogin: true,
            }}
            onFinish={async (values) => {
              await handleSubmit(values);
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            >
              <Input size="large" prefix={<UserOutlined />} placeholder="用户名: admin or user" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                placeholder="密码: （无密码）"
              />
            </Form.Item>
            <div className={styles.loginFormItem}>
              <Form.Item name="autoLogin" valuePropName="checked" noStyle>
                <Checkbox>自动登录</Checkbox>
              </Form.Item>
              <a className={styles.forgotPassword}>忘记密码</a>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.loginFormButton}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
