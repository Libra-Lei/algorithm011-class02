var minMutation = function(start, end, bank) {
  if (start === end) return 0;
  // 基因库
  const bankSet = new Set();
  bank.forEach(x => { bankSet.add(x); });
  // 基因组成字符
  const unit = ['A', 'C', 'G', 'T'];
  // 记录已访问过的基因序列组合
  const visited = new Map();
  visited.set(start, 1);
  // 队列 --> 广度搜索
  const queue = [];
  queue.unshift(start);
  let level = 0;
  while (queue.length) {
      let size = queue.length;
      while (size--) {
          const currStr = queue.pop();
          if (currStr === end) {
              return level;
          }
          const currStrArray = currStr.split('');
          for (let i = 0; i < currStrArray.length; i++) {
              const preStr = currStrArray[i];
              for (let j = 0; j < unit.length; j++) {
                  currStrArray[i] = unit[j];
                  const newStr = currStrArray.join('');
                  if (!visited.has(newStr) && bankSet.has(newStr)) {
                      queue.unshift(newStr);
                      visited.set(newStr, 1);
                  }
              }
              currStrArray[i] = preStr;
          }
      }
      level++;
  }
  return -1;
};