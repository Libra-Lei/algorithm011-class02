/**
 * 删除排序数组中的 重复元素
 * @param {number[]} nums 给定一个排序数组
 */
function removeDuplicatesFromSortedArray(nums) {
  // 快慢双指针
  let i = 0;
  for (let j = 1; j < nums.length; j ++) {
      if (nums[i] !== nums[j]) {
          nums[++i] = nums[j]
      }
  }
  return i + 1;
}