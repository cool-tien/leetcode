/**
    Time Complexity: O(n)
        91 ~ 95 ms      (81.38% ~ 90.97%)
    Space Complexity: O(1)
        46.1 ~ 46.2 MB  (81.38% ~ 85.10%)
    
    https://leetcode.com/problems/buy-two-chocolates/submissions/986410189/
        Runtime 91 ms, Beats 90.97%; Memory 46.2 MB, Beats 81.38%; 
    https://leetcode.com/problems/buy-two-chocolates/submissions/986410640/
        Runtime 95 ms, Beats 81.38%; Memory 46.2 MB, Beats 81.38%; 
    https://leetcode.com/problems/buy-two-chocolates/submissions/986410781/
        Runtime 95 ms, Beats 81.38%; Memory 46.1 MB, Beats 85.10%; 

 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let min1 = money + 1;
    let min2 = money + 1;

    for(const price of prices){
        if(min1 > price){
            //  if current "min1" small than "min2", assign it before change
            min2 = Math.min(min2, min1);
            min1 = price;
        }
        else if(min2 > price)
            min2 = price;
    }

    const purchase = min1 + min2;
    return (purchase <= money)?
        money - purchase: 
        money;
}