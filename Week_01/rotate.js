/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 方式一：时间复杂度太高了，因为数组插入
  // 想法：遍历最后 k 个元素，依次放到队首
  // let step = k % nums.length;
  // for (let i = 0; i < step; i++) {
  //     nums.unshift(nums.pop());
  // }

  // 方式二：
  // 1. 反转所有元素 2. 反转前 k 个元素 3. 反转前 n - k 个元素
  const step = k % nums.length;
  revert(nums, 0, nums.length -1);
  revert(nums, 0, step - 1);
  revert(nums, step, nums.length - 1);
};

/**
 * 反转数组元素位置
 * @param {array} nums 数组
 * @param {number}} start 开始索引
 * @param {number} end 结束索引
 */
function revert(nums, start, end) {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}