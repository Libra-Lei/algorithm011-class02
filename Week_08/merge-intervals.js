/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  if (!intervals.length) return [];
  const res = [];
  // 排序
  intervals.sort((a, b) => a [0] - b[0]);
  for (let i = 0; i < intervals.length;) {
      let t = intervals[i][1];
      let j = i + 1;
      while (j < intervals.length && intervals[j][0] <= t) {
          t = Math.max(t, intervals[j][1]);
          j++;
      }
      res.push([intervals[i][0], t]);
      i = j;
  }
  return res;
};