/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length - 1;
  for (let i = len; i >=0; i--) {
    if (++digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

// ======> 测试
const test = [
  [9],
  [4, 9, 9],
  [1, 2, 3, 4, 9]
]

test.forEach(digits => {
  console.log('原始值::::', digits);
  console.log('加一后::::', plusOne(digits));
})