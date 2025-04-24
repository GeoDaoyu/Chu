import { setAuthority } from '@/utils/authority';
import { history, useModel } from '@umijs/max';
import { Button } from 'antd';
import { getRole, login } from './service.js';

export default () => {
  const { setInitialState } = useModel('@@initialState');

  const onClick = async () => {
    const user = await login();
    console.log('获取用户信息 - 完成');
    const role = await getRole();
    console.log('获取权限信息 - 完成');
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
