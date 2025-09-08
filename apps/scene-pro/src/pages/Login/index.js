import { history, useModel } from '@umijs/max';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { setAuthority } from '@/utils/authority';
import { getRole, login } from './service.js';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
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
  return (
    <div className={styles.container}>
      <LoginForm
        contentStyle={{
          minWidth: 280,
          maxWidth: '75vw',
        }}
        logo={<img alt="logo" src="/logo.svg" />}
        title="Chu"
        subTitle="现代的WebGIS框架"
        initialValues={{
          autoLogin: true,
        }}
        onFinish={async (values) => {
          await handleSubmit(values);
        }}
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder="用户名: admin or user"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder="密码: （无密码）"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
};

export default Login;
