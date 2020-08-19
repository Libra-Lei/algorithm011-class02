/**
 * N 皇后问题
 * @param {number} n 棋盘规格
 */
const solveNQueens = (n) => {
  const res = [];
  const cols = new Set();
  const pies = new Set();
  const nas = new Set();

  recursion(n, res, cols, pies, nas, [], 0);
  return generateBoard(res, n);
}

/**
 * 解决皇后放置问题
 * @param {number} n 棋盘
 * @param {array} res 存储结果的数组
 * @param 「set} cols 垂直攻击范围
 * @param {set} pies 左对角线的攻击范围
 * @param {set} nas 右对角线的攻击范围
 * @param {array} queens 皇后放置的 列索引 数组
 * @param {number} row 当前行 
 */
const recursion = (n, res, cols, pies, nas, queens, row) => {
  // terminal
  if (row >= n) return res.push(queens.slice());
  // process logic --> 遍历当前行的 列
  for (let col = 0; col < n; col++) {
    // 当前位置在攻击范围内，不能放置皇后
    if (cols.has(col) || pies.has(col + row) || nas.has(col - row)) continue;
    // 可以放置皇后
    queens.push(col);
    cols.add(col);
    pies.add(col + row);
    nas.add(col - row);
    // drill down
    recursion(n, res, cols, pies, nas, queens, row + 1);
    // revert state
    queens.pop();
    cols.delete(col);
    pies.delete(col + row);
    nas.delete(col - row);
  }
}

/**
 * 构建棋盘
 * @param {array} res 皇后结果集
 * @param {number} n 棋盘规格
 */
const generateBoard = (res, n) => {
  return res.map(queens => {
    return queens.map(q => {
      return Array(n).fill(0).map((t, index) => index === q? 'Q' : '.').join('');
    });
  });
}