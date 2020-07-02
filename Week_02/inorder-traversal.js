/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // 方式一： 递归
  // const res = new Array();
  // inOrder(root, res);
  // return res;

  // 方式二：利用栈循环
  let res = new Array(); // 存储最终结果
  let stack = new Array(); // 模拟栈
  let curr = root;  // 当前遍历到的节点
  while (curr || stack.length) {
    // 遍历左子树，一次入栈
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    // 当到达叶子节点，出栈
    curr = stack.pop(); // 左
    res.push(curr.val); // 根
    curr = curr.right; // 右
  }
  return res;
};
function inOrder(root, res) {
  if (root) {
    inOrder(root.left, res);
    res.push(root.val);
    inOrder(root.right, res);
  }
}