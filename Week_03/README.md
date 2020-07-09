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

## 分治和回溯
1. 分治和回溯实际上就是递归，只不过它是递归的一种复杂的形式；
2. 重复性有最优重复性和最近重复性
    - 最优：就是动态规划
    - 最近：根据重复性如何构造和分解，就有分治和回溯
### 分治
1. 思想：找重复性 -- 分解若干子问题 -- 组合结果
2. 分治模版：和泛型递归模版区别，就在于组合一下子问题的结果
    ```javascript
    function divideConquer(problem, param1, param2) {
      // recursion terminator
      if (!problem) {
         return;
      }
      // prepar data
      const data = preparData(problem);
      const subProblems = splitData(problem, data);
      // conquer sunproblems
      const subresult1 = divideConquer(subproblems[0], '...');
      const subresult2 = divideConquer(subproblems[2], '...');
      const subresult3 = divideConquer(subproblems[3], '...');
      // process and generator current result
      const result = processResults(subresult1, subresult2, subresult3);

      // revert the current level status if needed
    }
    ```
### 回溯
1. 就是一层层的不断去试错
2. 一般就是最简单的泛型递归