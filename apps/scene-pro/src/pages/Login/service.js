import { request } from '@umijs/max';

export async function login(params) {
  return request('/api/v1/login', {
    method: 'GET',
    params: {
      ...params,
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
