/**
 * 买卖股票的最佳时间
 * 一次交易
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit = Math.max(profit, (prices[i] - min));
    }
  }
  return profit;
};