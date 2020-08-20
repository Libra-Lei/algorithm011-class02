/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
      if (sMap.has(s[i])) {
          sMap.set(s[i], sMap.get(s[i]) + 1);
      } else {
          sMap.set(s[i], 1);
      }
  }
  for (let i = 0; i < s.length; i++) {
      if (sMap.get(s[i]) === 1) return i;
  }
  return -1;
};