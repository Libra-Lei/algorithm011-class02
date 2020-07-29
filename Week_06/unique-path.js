/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  //  递推 opt[i, j] = opt[i + 1, j] + opt[i, j + 1]
  // 先将左右两列边界置为 1
  // const row = new Array(n).fill(0);
  // const dp = [];
  // for (let i = 0; i < m; i++) dp.push(row.concat([]));
  // for (let i = 0; i < n; i++) dp[0][i] = 1;
  // for (let i = 0; i < m; i++) dp[i][0] = 1;
  // // 递推
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  //   }
  // }
  // return dp[m - 1][n - 1];

  //  优化：只维护一个一维数组
  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }
  return dp[n - 1];
};

// uniquePaths(3, 2);
console.log('uniquePaths(3, 2): ', uniquePaths(3, 2));