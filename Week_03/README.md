# 学习笔记

## 递归
1. 为什么面试题解法，一般都是递归？
   - 树的节点定义就是 递归形式
   - 重复性
2. 定义 Recursion：
   - 递归和循环没有本质的区别 --> 机器语言没有循环，所谓循环就是不断调用之前的某一点
   - 通过函数进行的循环 --> 函数自身的不断的调用
   - 归去来兮的感觉
3. 理解：
   - 每次向下再回来，自身的状态会发生改变
   - 每一层的周围环境是不会影响其他层的，独有的
4. 代码模版
   ```javascript
   function recursion(level, params1, params2) {
     // recursion terminator
     if (level > MAX) return;
     // process logic in current level
     process('...');
     // drill down
     recursion(level + 1, '....');

     // reverse the current level status if needed!
   }
   ```
5. 思维要点
   - 不要人肉递归
   - 找最近最简方法，将其拆解为可重复解决的子问题。
   - 数学归纳法思维