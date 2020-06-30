/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 判断长度
  if (s.length !== t.length) return false;
  let counter = [...Array(26)].map(() => 0);
  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    counter[t[i].charCodeAt() - 'a'.charCodeAt()]--;
  }
  for (let j = 0; j < counter.length; j++) {
    if (counter[j] !== 0) {
      return false;
    }
  }
  return true;
};

console.log('判断结果:::', isAnagram("anagram", "nagaram"));