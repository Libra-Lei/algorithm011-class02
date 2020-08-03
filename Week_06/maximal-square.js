/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = matrix => {
  if (!matrix || !matrix.length || !matrix[0].length) return 0;
  let maxSide = 0;
  const m = matrix.length, n = matrix[0].length;
  const dp = [], row = Array(n).fill(0);
  for (let i = 0; i < m; i++) dp.push(row.concat([]));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
      }
      maxSide = Math.max(maxSide, dp[i][j]);
    }
  }
  return maxSide * maxSide;
}

const test = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
console.log(maximalSquare(test));