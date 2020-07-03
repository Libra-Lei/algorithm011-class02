# 笔记总结

## 一、Hash Table
1. 定义：哈希表，也称散列。是根据关键码值（key-value）进行直接访问的数据结构；
2. 它通过把关键码值映射到表中的一个位置来访问记录，来加快查找速度；
3. 这个映射函数叫做 散列函数 Hash Function，存放记录的数组叫做 哈希表 Hash Table 或 散列表。
4. 哈希碰撞：不同的值通过 散列函数 计算出来的值一样，就是哈希碰撞。
   - 拉链式 方法解决：就是在冲突的位置，拉出一个链表存储多个值。
5. Hash Table 平均是以 O(1) 的时间复杂度进行 删除、查询、插入 操作。


## 二、二叉搜索树 Binart Search Tree
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

## 三、二叉树的遍历：
> 1）前中后序遍历，简单看就是以遍历 根 的顺序划分，左右顺序不变；
> 2）树的遍历基本上都是基于递归，因为树结构没有办法进行有效的循环。递归操作较为简单。

1. 前序遍历(Pre-order)：根->左->右
```python
def preorder(self, root):
  if root:
  self.traverse_path(root.val)
  self.preorder(root.left)
  self.preorder(root.right)
```

2. 中序遍历(In-order)：左->根->右
```python
def inorder(self, root):
  if root:
  self.inorder(root.left)
  self.traverse_path(root.val)
  self.inorder(root.right)
```

3. 后序遍历(Post-order)：左->右->根
```python
def postorder(self, root):
  if root:
  self.postorder(root.left)
  self.postorder(root.right)
  self.traverse_path(root.val)
```

## 四、堆 Heap
1. 定义：可以迅速找到一堆数据中的最大值和最小值的数据结构。（二取其一）
2. 大顶推（大根堆）：根节点是最大的；
3. 小顶堆（小根堆）：根节点是最小的。
4. 常见堆：二叉堆、斐波那契堆等。
5. 常见操作：
   - findMax: O(1);
   - deleteMax: O(1);
   - insert: O(logN) 或 O(1);

## 五、二叉堆 Binary Heap
> 二叉堆是最容易实现的，但不是最优的。
1. 定义：由完全二叉树实现（注：不是二叉搜索树，因为二搜索树 找最小值不是O(1)的）
2. 性质（大顶推）：
   - 是一颗满二叉树（完全树）
   - 树中的任意节点总是 >= 其子节点的值
3. ***二叉堆实现细节***：
   - 二叉堆一般是通过数组实现
   - 假设”第一个元素“在数组中的索引为0，则父节点和其子节点关系：
     - 索引为 i 的节点的左孩子索引：2*i + 1
     - 索引为 i 的节点的右孩子索引：2*i + 2
     - 索引为 i 的节点的父节点的索引：floor((i - 1) / 2)
4. insert:
   - 先插入尾部
   - 再依次向上调整：if > 根？交换值
   - 时间复杂度：O(logN)
5. delete 堆顶:
   > 因为是完全树，所以肯定是由最后的节点替换删除节点
   - 将最后的节点替换堆顶节点
   - 再向下调整：if > MAX(左、右子节点)? 交换 MAX 子节点

## 六、图 Graph
1. 定义：Graph(V, E) --> 有点 Vertex、有边 Edge
2. V-Vertex: 点
   - 度：入度 和 出度
   - 联通性：点与点之间联通与否
3. E-Edge: 边
   - 有向和无向：单行线
   - 权重：边长
