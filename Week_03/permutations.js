/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const res = [];
  const dfs = (list) => {
    if (nums.length === list.length) return res.push(list.slice(0));
    nums.forEach(num => {
      if (!list.includes(num)) {
        list.push(num);
        dfs(list);
        list.pop();
      }
    })
  }
  dfs([]);
  return res;
};