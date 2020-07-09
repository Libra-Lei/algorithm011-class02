/**
 * 查找二叉树的最近公共组先您
 * @param {TreeNode} root 二叉树节点
 * @param {TreeNode} p 
 * @param {TreeNode} q 
 */
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const lson = lowestCommonAncestor(root.left, p, q);
  const rson = lowestCommonAncestor(root.right, p, q);
  if (lson && rson) return root;
  return lson? lson : rson;
}