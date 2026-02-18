import { request } from '@umijs/max';

export default function getLayerTree() {
  return request('/Chu/api/v1/layerTree.json', {
    method: 'GET',
  });
}
