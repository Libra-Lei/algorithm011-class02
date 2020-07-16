const minMutation = (start, end, bank) => {
  if (start === end) return 0;
  // 创建基因库 hash set 降低查询的时间复杂度
  const bankSet = new Set();
  bank.forEach(x => { bankSet.add(x); });
  // 基因组成的基本字符 --> 用于和上一次的基因字符串重新组合
  const unit = ['A', 'C', 'G', 'T'];
  // 记录已经访问过（组合过的）字符
  const visited = new Set();
  visited.add(start);
  // 队列 --> 用于广度优先搜索组合变化过的基因字符串
  const queue = [];
  queue.unshift(start);
  // 记录变化次数
  let level = 0;
  while (queue.length) {
    // 当前 level 的所有基因字符串先出队
    let size = queue.length;
    while (size--) {
      const curr = queue.pop();
      // 匹配到目标基因 --> level 就是最小变换次数
      if (curr === end) return level;
      // 开始把当前基因字符串， 从开始到最后的字符 一次替换成 基础字符，组合
      const currArray = curr.split('');
      for (let i = 0; i < currArray.length; i++) {
        // 记录当前被替换掉的字符
        const pre = currArray[i];
        // 依次替换 基础字符
        for (let j = 0; j < unit.length; j++) {
          currArray[i] = unit[j];
          const newStr = currArray.join('');
          // 如果新组成的字符串没有被访问过，并且在基因库里面
          if (!visited.has(newStr) && bankSet.has(newStr)) {
            visited.add(newStr);
            queue.unshift(newStr);
          }
        }
        // 还原刚被替换掉的字符
        currArray[i] = pre;
      }
    }
    level++;
  }
  return -1;
}