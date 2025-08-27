import { ConfigProvider } from 'antd';
import { isNotEmpty } from 'ramda';
import { DEFAULT_INITIALSTATE } from '@/constants';
import { getAuthority } from '@/utils/authority';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  const authority = getAuthority();

  return isNotEmpty(authority) ? authority : DEFAULT_INITIALSTATE;
}
export const request = {
  requestInterceptors: [],
  responseInterceptors: [],
};
export function rootContainer(container) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      {container}
    </ConfigProvider>
  );
}
