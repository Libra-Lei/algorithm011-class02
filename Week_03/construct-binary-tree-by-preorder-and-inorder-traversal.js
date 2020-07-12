/**
 * 从二叉树的前序遍历和中序遍历中构造二叉树
 * @param {TreeNode} preorder 
 * @param {TreeNode} inorder 
 */
const buildTree = (preorder, inorder) => {
  // 解法一：
  // preorder[0] --> 就是 root.val
  // inorder.indexOf(root.val) --> 就是root.val在inorder中的索引 & left of size
  // left --> preorder.slice(1, size + 1 - 1 + 1) & inorder.slice(0, size - 1 + 1)
  // right --> preorder.slice(size + 1 -1 + 1) & inorder.slice(size + 1)
  
  // terminator
  // if (!preorder.length) return null;
  // const root = new TreeNode(preorder[0]);
  // const size = inorder.indexOf(root.val);
  // root.left = buildTree(preorder.slice(1, size + 1), inorder.slice(0, size));
  // root.right = buildTree(preorder.slice(size + 1), inorder.slice(size + 1));
  // return root;

  // 解法二: 优化
  // 不要每次 slice 
  // 预先遍历 inorder use map store val and index, 降低 indexOf 为 O(1)
  const map = new Map();
  inorder.forEach((item, index) => {
    map.set(item, index);
  });
  return helper(preorder, 0, preorder.length - 1, 0, inorder.length - 1, map);
}

/**
 * TreeNode
 * @param {TreeNode} preorder 
 * @param {number} preStart 前序遍历的开始索引
 * @param {number}} preEnd 前序遍历的结束索引
 * @param {number} inStart 
 * @param {number} inEnd 
 * @param {Map} map 中序遍历的 map
 */
const helper = (preorder, preStart, preEnd, inStart, inEnd, map) => {
  if (preStart > preEnd) return null;
  const root = new TreeNode(preorder[preStart]);
  const rootIndex = map.get(root.val);
  const size = rootIndex - inStart;
  root.left = helper(preorder, preStart + 1, preStart + size, inStart, rootIndex, map);
  root.right = helper(preorder, preStart + size + 1, preEnd, rootIndex + 1, inEnd, map);
  return root;
}
