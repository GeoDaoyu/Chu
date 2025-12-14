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
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          title={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img alt="logo" src="/logo.svg" style={{ height: 40, marginRight: 8 }} />
              <span>Chu</span>
            </div>
          }
          extra={
            <div style={{ textAlign: 'center' }}>
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
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <Form.Item name="autoLogin" valuePropName="checked" noStyle>
                <Checkbox>自动登录</Checkbox>
              </Form.Item>
              <a
                style={{
                  float: 'right',
                }}
              >
                忘记密码
              </a>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
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
