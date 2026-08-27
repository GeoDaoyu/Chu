import { useEffect, useRef } from 'react';

/**
 * 将 map-components 的 referenceElement 绑定到真实的视图容器 DOM 元素。
 *
 * @arcgis/map-components 的 resolveReferenceElement 只允许 referenceElement
 * 指向 <arcgis-map> / <arcgis-scene> / <arcgis-link-chart> 元素；如果传字符串
 * id（如 "view"）解析到普通 div，会在控制台输出：
 *   Expected property `referenceElement` to point to an <arcgis-map>,
 *   <arcgis-scene>, or <arcgis-link-chart> element, but instead found <div>.
 * 直接传元素对象会跳过该校验（非字符串直接返回，不做类型检查），
 * 因此组件上不要写 reference-element 属性，由本 hook 在挂载后
 * 把容器元素赋给 referenceElement。视图仍通过容器元素上的 `.view`
 * 属性绑定（由 Map 组件在初始化时挂载）。
 *
 * 用法：
 *   const ref = useReferenceElement();
 *   return <arcgis-xxx ref={ref} />;
 *
 * @param {string} containerId 视图容器元素 id，默认 "view"
 */
export default function useReferenceElement(containerId = 'view') {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const container = document.getElementById(containerId);
    if (container) {
      element.referenceElement = container;
    }
  }, [containerId]);

  return ref;
}
