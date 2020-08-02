/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  // 去掉最后一家和第一家
  const robAction = (house) => {
      const dp = [];
      dp[0] = 0;
      dp[1] = house[0];
      for (let i = 2; i < nums.length; i++) {
          dp[i] = Math.max(dp[i - 1], house[i - 1] + dp[i - 2]);
      }
      return dp[nums.length - 1];
  }

  const rob1 = robAction(nums.slice(1));
  const rob2 = robAction(nums.slice(0, nums.length - 1));
  return Math.max(rob1, rob2);
};