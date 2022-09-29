/**
    O(n / m)
    59~97 ms     (43.62%~95.30%)
    41.5~41.6 MB (75.84%~92.62%)
    
    https://leetcode.com/submissions/detail/811052004/
        Runtime: 69 ms, faster than 85.91% of JavaScript online submissions for Water Bottles.
        Memory Usage: 41.5 MB, less than 92.62% of JavaScript online submissions for Water Bottles.
    https://leetcode.com/submissions/detail/811068065/
        Runtime: 59 ms, faster than 95.30% of JavaScript online submissions for Water Bottles.
        Memory Usage: 41.6 MB, less than 75.84% of JavaScript online submissions for Water Bottles.
    https://leetcode.com/submissions/detail/811076675/
        Runtime: 97 ms, faster than 43.62% of JavaScript online submissions for Water Bottles.
        Memory Usage: 41.6 MB, less than 87.92% of JavaScript online submissions for Water Bottles.

 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let empty = numBottles;
    
    while(empty >= numExchange){
        let exchange = ~~(empty / numExchange);
        let remain = empty % numExchange;
        
        numBottles += exchange;
        empty = exchange + remain;
    }
    
    return numBottles;
};