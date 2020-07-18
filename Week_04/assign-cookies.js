/**
 * 455 分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gi = 0, sj = 0, res = 0;
  while (gi < g.length && sj < s.length) {
    if (s[sj] >= g[gi]) {
      gi++;
      sj++;
      res++;
    } else {
      sj++;
    }
  }
  return res;
};