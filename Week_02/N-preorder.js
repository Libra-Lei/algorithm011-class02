/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * N 叉树的先序遍历
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
  // 递归 - 就不写了
  // 栈 ——> 循环
  if (!root) return [];
  const stack = new Array();
  const res = new Array();
  // 根节点先入栈
  stack.push(root);
  while (stack.length) {
    // 根节点出栈
    const treeNode = stack.pop();
    res.push(treeNode.val);
    // 右子树 -> 左子树 一次入栈
    if (!treeNode.children) continue;
    for (let i = treeNode.children.length - 1; i >= 0; i--) {
      stack.push(treeNode.children[i]);
    }
  }
  return res;
}