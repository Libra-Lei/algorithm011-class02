/**
 * 最长 升序子序列
 * @param {array} nums 数字序列
 */
const lengthOfLIS = (nums) => {
  if (!nums.length) return 0;
  let maxAns = 1;
  // 状态转移方程 dp[i] = Max(dp[j]) + 1
  //    0 <= i < j  &&  nums[i] < nums[j]
  const dp = Array(nums.length).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    let max = 0;
    // 以 i 结尾 子串
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
}