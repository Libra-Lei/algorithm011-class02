/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  strs.forEach(str => {
    const counter = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      counter[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const key = counter.join();
    if (map.has(key)) {
      const temp = map.get(key);
      temp.push(str);
      map.set(key, temp);
    } else {
      map.set(key, [str]);
    }
  })
  return Array.from(map.values());
};

// ========测试==========
const test = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log('异位词分组:::', groupAnagrams(test));