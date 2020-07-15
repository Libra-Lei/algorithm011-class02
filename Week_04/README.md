# 学习笔记

## 深度优先和广度优先遍历
在树或图中搜索特定节点
   - 每个节点访问一次
   - 且每个节点仅访问一次
   - 对于节点的不同访问顺序，分为：
     - 深度优先搜索 Depth first search
     - 广度优先搜索 Breadth first search
     - 其他：优先级优先-启发式搜索
### 1. 深度优先
```javascript
const visited = [];
function dfs(root, visited) {
  // terminator
  if (visited.includes(root)) return;
  visited.push(root);
  // process...

  // drill down
  for (child in root.children) {
    if (visited.includes(child)) continue;
    dfs(child, visited);
  }
}
```
### 2. 广度优先
```javascript
function bfs(graph, start, end) {
  const visited = [];
  const queue = [];
  queue.push(start);
  while (!queue.length) {
    const node = queue.shift();
    visited.push(node);
    // process node
    // 再讲node的子节点一次放入队列
    const nodes = generator_nodes(node);
    queue.push(nodes);
  }
}
```
### 3. 岛屿数量问题
```text
输入:
[
['1','1','1','1','0'],
['1','1','0','1','0'],
['1','1','0','0','0'],
['0','0','0','0','0']
]
输出: 1
```
解题思路：
- 因为地图就是二维数组，所以可以通过两层循环，一次遍历
- 遍历遇到陆地(1)
   - 统计岛屿数量 +1
   - 把该陆地的上下左右的陆地均干掉(-->0);
- 干掉陆地上下左右陆地就采用 DFS

## 贪心算法
1. 定义：贪心算法是一种在当下每一步中选择最好或者最优的选择，从而你导致的结果是全局最好或最优
2. 贪心算法和动态规划的异同点：
   - 贪心：对于每个子问题的解决方案都作出选择，且不能回退
   - 动态规划：会保存以前的没个结果，并会根据以前的结果对当前选择，有回退功能
   - 回溯：能回退
3. 用途：
   - 贪心可以解决一些最优化问题，比如求图中的最小生成树、哈夫曼编码等。
   - 但实际工程和生活中，贪心算法一般不能求得我们想要的答案
   - 一旦一个问题可以通过贪心算法来解决，那么贪心算法一般是这个问题的最好办法
   - 由于贪心的高效性和一般求得结果比较接近最优解，所以贪心算法可以用作辅助算法，或者解决一些结果要求不是特别精确的问题

## 二分查找
1. 使用二分查找的前提条件
   - 目标函数单调性（单调递增或单调递减）
   - 存在上下界（bounded）
   - 可以通过索引访问元素 (index assessible)
2. 代码模版
```javascript
function binarySearch(array, target) {
  let left = 0, right = array.length - 1;
  while (left <= right) {
    let mid = (left + right) / 2;
    if (array[mid] === target) {
      // find result
      break;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
```