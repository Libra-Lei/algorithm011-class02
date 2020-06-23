/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  const arr = [];
  nums.forEach((val, index) => {
    const diff = target - val;
    if (map.has(diff)) {
      arr.push(map.get(diff));
      arr.push(index);
    } else {
      map.set(val, index);
    }
  })
  return arr;
};

// ============> 测试
console.log(twoSum([2, 7, 11, 15], 9));