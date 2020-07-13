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