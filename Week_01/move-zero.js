/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 1. 双指针，j 永远指向最后一个不为 0 的元素的位置
  // 2. 遍历 nums ,遇到不为零的元素，交换 nums[j] , j++
  let j = 0;
  nums.forEach((val, i) => {
    if (val !== 0) {
      [nums[j], nums[i]] = [val, nums[j]];
      j++;
    }
  })
};

// ===> 测试用例
const arr = [0,1,0,3,12];
console.log('异动前:::', arr);
moveZeroes(arr);
console.log('异动后:::', arr);