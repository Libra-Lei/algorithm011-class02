/**
 * 不同路径 - 有障碍物
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  // 动态规划
  // dp 方程： if (obstacleGrid[i][j] !== 1) f[i][j] = f[i - 1][j] + f[i][j - 1];
  //          else f[i][j] = 0;
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = [], temp = new Array(n).fill(0);
  for (let i = 0; i < m; i++) dp.push(temp.concat([]));
  // 先初始化第一行和第一列
  for (let i = 0; i < m && obstacleGrid[i][0] !== 1; i++) dp[i][0] = 1;
  for (let i = 0; i < n && obstacleGrid[0][i] !== 1; i++) dp[0][i] = 1;
  // 分治
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        dp[i][j] = dp[i -1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};