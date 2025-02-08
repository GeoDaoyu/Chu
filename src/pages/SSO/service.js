import { request } from '@umijs/max';

export async function getUser(token) {
  return request('/api/v1/getUser', {
    method: 'GET',
    params: {
      token,
    },
  });
}
export async function getRole(params) {
  return request('/api/v1/getRole', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
