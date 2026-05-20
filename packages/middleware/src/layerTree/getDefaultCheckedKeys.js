const getDefaultCheckedKeys = (treeData) => {
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

export default getDefaultCheckedKeys;
