/**
    Time Complexity: (2n log n)
    Space Complexity: (n)

    https://leetcode.com/problems/maximum-ice-cream-bars/submissions/872301197/
        Runtime 570 ms, Beats 10.00%; Memory 92.3 MB, Beats 6.67%
    https://leetcode.com/problems/maximum-ice-cream-bars/submissions/872302850/
        Runtime 464 ms, Beats 40.00%; Memory 92.3 MB, Beats 6.67%
    https://leetcode.com/problems/maximum-ice-cream-bars/submissions/872303110/
        Runtime 585 ms, Beats  6.67%; Memory 92.0 MB, Beats 6.67%

 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let map = new Map();
    let count = 0;

    //  build hash map and sorting
    for(let cost of costs)
        map.set(cost, (map.get(cost) || 0) + 1);
    let sorted = [...map].sort((a, b) => a[0] - b[0]);    

    for(let [num, appear] of sorted){
        let val = num * appear;

        if(coins >= val){
            count += appear;
            coins -= val;
        }
        else if(coins >= num){
            let repeat = ~~(coins / num);

            count += repeat;
            coins -= (repeat * num);
        }
        else
            break;
    }

    return count;
};