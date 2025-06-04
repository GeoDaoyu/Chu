import { history, useModel } from '@umijs/max';
import { useEffect } from 'react';
import { getRole, getUser } from './service.js';

export default () => {
  const { setInitialState } = useModel('@@initialState');

  useEffect(() => {
    const login = async () => {
      // 从url或storage等获取token
      const token = '';
      const user = await getUser(token);
      const role = await getRole();
      setInitialState({
        name: user.data.name,
        user: user.data,
        role: role.data,
      });
      // 跳转回home页面
      history.push('/home');
    };
    login();
  }, [setInitialState]);
  return <div>单点登录</div>;
};
