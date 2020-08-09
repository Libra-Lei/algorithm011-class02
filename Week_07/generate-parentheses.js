var generateParenthesis = function(n) {
  const res = [];
  dfs(n, 0, 0, '', res);
  return res;
};
const dfs = (n, left, right, str, res) => {
  if (left === n && right === n) return res.push(str);
  if (left < n) dfs(n, left + 1, right, `${str}(`, res);
  if (left > right && right < n) dfs(n, left, right + 1, `${str})`, res);
}