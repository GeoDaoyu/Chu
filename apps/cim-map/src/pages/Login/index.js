import { history, useModel } from '@umijs/max';
import { Button } from 'antd';
import { setAuthority } from '@/utils/authority';
import { getRole, login } from './service.js';

const Login = () => {
  const { setInitialState } = useModel('@@initialState');

  const onClick = async () => {
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
    <div>
      <Button type="primary" onClick={onClick}>
        登录
      </Button>
    </div>
  );
};

export default Login;
