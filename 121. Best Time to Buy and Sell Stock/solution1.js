/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let profit = 0;
    
    for(let price of prices)
        if(min>price)
            min = price;
        else
            profit = Math.max(profit, price-min);
    return profit;
};