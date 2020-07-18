/**
 * 买卖股票的最佳时间-II
 * 多次交易
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 贪心-> 只要后一天价格比前一天高就卖出
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const curr = prices[i + 1] - prices[i];
    curr > 0? profit += curr : profit += 0;
  }
  return profit;
};