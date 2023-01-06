/**
    Time Complexity: O(2n log n)
        267 ~ 627 ms    ( 6.67% ~ 83.33%)
    Space Complexity: O(1)
        55.8 ~ 56.1 MB  (28.33% ~ 71.67%)

    https://leetcode.com/problems/maximum-ice-cream-bars/submissions/872293918/
        Runtime 376 ms, Beats 45.00%; Memory 56.1 MB, Beats 28.33%
    https://leetcode.com/problems/maximum-ice-cream-bars/submissions/872296237/
        Runtime 627 ms, Beats  6.67%; Memory 56.0 MB, Beats 41.67%
    https://leetcode.com/problems/maximum-ice-cream-bars/submissions/872296566/
        Runtime 340 ms, Beats 46.67%; Memory 55.8 MB, Beats 71.67%
    https://leetcode.com/problems/maximum-ice-cream-bars/submissions/872304164/
        Runtime 267 ms, Beats 83.33%; Memory 56.0 MB, Beats 45.00%

 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let count = 0;

    costs.sort((a, b) => a - b);

    for(let cost of costs)
        if(coins >= cost){
            coins -= cost;
            count++;
        }
        else
            break;
    
    return count;
};