/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    const sub = [];
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      sub.push(curr.val);
    }
    res.push(sub);
  }
  return res;
};