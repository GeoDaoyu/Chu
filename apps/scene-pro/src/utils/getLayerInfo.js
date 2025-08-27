const findNode = (node, key) => {
  if (node.key === key) {
    return node;
  }

  if (node.children) {
    for (const child of node.children) {
      const found = findNode(child, key);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

const getLayerInfo = (treeData) => (key) => {
  const node = findNode({ children: treeData }, key);
  return node;
};

export default getLayerInfo;
