import { request } from '@umijs/max';

export async function getLayerTree() {
  return request('/api/v1/layerTree', {
    method: 'GET',
  });
}
