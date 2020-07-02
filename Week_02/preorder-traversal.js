/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // 递归：
  // const res = new Array();
  // preOrder(root, res);
  // return res;

  // 循环：
  let res = new Array();
  let stack = new Array();
  if (!root)  return res;
  // 因为是先序遍历，先将根节点压入栈中
  stack.push(root);
  while (stack.length) {
    // 先出栈的就是根节点
    const node = stack.pop();
    res.push(node.val);
    // 因为栈是先进后出
    // 所以先 右子树入栈 -> 左子树入栈
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
};

function preOrder(root, res) {
  if (root) {
    res.push(root.val);
    preOrder(root.left, res);
    preOrder(root.right, res);
  }
}