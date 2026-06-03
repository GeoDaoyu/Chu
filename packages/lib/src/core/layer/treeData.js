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

export const getLayerInfo = (treeData, key) => {
  const node = findNode({ children: treeData }, key);
  return node;
};

export const getDefaultCheckedKeys = (treeData) => {
  const keys = [];
  const traverse = (nodes) => {
    nodes.forEach((node) => {
      if (node.defaultChecked) {
        keys.push(node.key);
      }
      if (node.children) {
        traverse(node.children);
      }
      if (node.layers) {
        traverse(node.layers);
      }
    });
  };
  traverse(treeData);
  return keys;
};
