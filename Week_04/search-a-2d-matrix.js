/**
 * 搜索二维矩阵
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const arr = matrix.reduce((pre, curr) => pre.concat(curr), []);
  // const arr = matrix.flat(2);
  let left = 0, right = arr.length - 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return true;
      if (arr[mid] > target) right = mid - 1;
      else left = mid + 1;
  }
  return false;
  // const m = matrix.length;
  // if (!m) return false;
  // const n = matrix[0].length;
  // let left = 0, right = m * n  - 1;
  // while (left <= right) {
  //     // const mid = Math.floor((left + right) / 2);
  //     const mid = (left + right) >> 1;
  //     const row = Math.floor(mid / n);
  //     const col = mid % n;
  //     if (matrix[row][col] === target) return true;
  //     if (matrix[row][col] > target) right = mid - 1;
  //     else left = mid + 1;
  // }
  // return false;
};