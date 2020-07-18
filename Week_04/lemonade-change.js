/**
 * 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let ten = 0, five = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) five++;
    if (bills[i] === 10) { five--; ten++; }
    if (bills[i] === 20) { ten? (ten--, five--) : five -= 3; }
    if (five < 0) return false;
  }
  return true;
};