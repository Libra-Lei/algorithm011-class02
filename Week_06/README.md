# 动态规划笔记

## 分治、回溯、递归、动态规划
1. 复杂问题转化为各种子问题，同时寻找重复性；
2. 他们没有本质的区别
3. *拒绝人肉递归
4. *找到最近、最简的重复性子问题
5. *面试题看起来复杂，但它一定可以分解成子问题
5. *学会数学归纳法思想

## 动太规划
1. 本质上就是一个递归和分治问题
2. 共性：将问题分解子问题 （递归）
3. 差异：动太规划有最优子结构，中途淘汰次优解（动态递推）

## 动态规划关键点
1. 最优子结构 -- opt[n] = best_opt(opt[n - 1], opt[n - 2]...)
2. 存储中间状态 opt[i] -- 初学者可能这里比较难（简单题）
3. 递推公式（状态转移方程 或者 DP方程）
  3.1 Fib: opt[i] = opt[n - 1] + opt[n - 2]
  3.2 二维路径: opt[i, j] = opt[i + 1, j] + opt[i, j + 1] 且判断opt[i, j] 是否为空地
 
## Fibonacci
1. 简单递归
> 时间复杂度是 指数级的
``` js
const fib = n => {
  // terminator
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```
2. 加缓存 （memory）
```js
const fib = (n, memory) => {
  // terminator
  if (n <= 1) return n;
  if (memory[n] === 0) {
    memory[n] = fib(n - 1, memory) + fib(n - 2, memory);
  }
  return memory[n];
}
```
3. 递推（自底向上）
```js
const fib = n => {
  // 循环来搞
  // 0 1 1 2 3
  const res = [];
  res[0] = 0;
  res[1] = 1;
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
}
```
