// 全局共享数据示例
import { useState } from 'react';

const useView = () => {
  const [view, setView] = useState();
  return {
    view,
    setView,
  };
};

export default useView;
