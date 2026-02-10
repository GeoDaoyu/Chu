import { id } from './config.js';
import { useLayerTreeStore } from '@chu/store';

export default () => {
  const { checkedKeys, setCheckedKeys } = useLayerTreeStore();

  const add = () => setCheckedKeys([...checkedKeys, id]);
  const remove = () => setCheckedKeys(checkedKeys.filter((key) => key !== id));

  return {
    add,
    remove,
  };
};
