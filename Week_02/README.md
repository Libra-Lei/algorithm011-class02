# 笔记总结

## 二叉搜索树 Binart Search Tree
> 中序遍历是升序排列
### 定义
1. 也称二叉排序树、有序二叉树 Ordered Binary Tree、排序二叉树 Sorted Binary Tree
2. 左子树的所有节点都小于它的根节点
3. 右子树的所有节点都大于它的根节点
4. 以此类推，它的左右子树也是二叉查找树。 --> 这就是重复性

### 常见操作
> 极端情况：时间复杂度退化为 O(n)
1. 查找：时间复杂度 O(logN)
2. 插入：时间复杂度 O(logN)
3. 删除：时间复杂度 O(logN)

### 问题：树的面试题解法为什么一般都是递归？
1. 有明确的终止条件
2. 树结构遍历没有办法进行有效的循环，递归是较为简单的操作（老师讲过的）
3. 明显的重复子问题

## 二叉树的遍历：
> 前中后序遍历，简单看就是以遍历 根 的顺序划分，左右顺序不变
> 树的遍历基本上都是基于递归，因为树结构没有办法进行有效的循环。递归操作较为简单。

### 前序遍历(Pre-order)：根->左->右
```python
def preorder(self, root):
  if root:
  self.traverse_path(root.val)
  self.preorder(root.left)
  self.preorder(root.right)
```

### 中序遍历(In-order)：左->根->右
```python
def inorder(self, root):
  if root:
  self.inorder(root.left)
  self.traverse_path(root.val)
  self.inorder(root.right)
```

### 后序遍历(Post-order)：左->右->根
```python
def postorder(self, root):
  if root:
  self.postorder(root.left)
  self.postorder(root.right)
  self.traverse_path(root.val)
```