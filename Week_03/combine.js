/**
 * 给出 1 - n 中 k个数的所有不重复的组合
 * @param {number}} n n
 * @param {k} k k个数的组合
 */
function combine(n, k) {
  const res = [];
  recursion(res, [], 1, n, k);
  return res;
}

function recursion(res, list, start, n, k) {
  // recursion terminator
  if (k === 0) {
    return res.push(list);
  }
  // process logic in current level
  // 遍历 n
  for (let i = start; i <= n; i++) {
    list.push(i);
    recursion(res, list.slice(0), i + 1, n, k - 1);
    list.pop();
  }
}

// ======= 测试==============
console.log('test result::::', combine(4, 2));