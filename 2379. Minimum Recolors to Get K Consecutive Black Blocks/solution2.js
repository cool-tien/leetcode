/**
    O(n)
    87~96 ms     (52.92%~62.34%)
    42.2~42.9 MB (25.00%~79.06%)

    https://leetcode.com/submissions/detail/825585735/
        Runtime: 95 ms, faster than 53.90% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
        Memory Usage: 42.9 MB, less than 25.00% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
    https://leetcode.com/submissions/detail/825587171/
        Runtime: 96 ms, faster than 52.92% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
        Memory Usage: 42.2 MB, less than 79.06% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
    https://leetcode.com/submissions/detail/825587290/
        Runtime: 87 ms, faster than 62.34% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
        Memory Usage: 42.8 MB, less than 32.95% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.


 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
 var minimumRecolors = function(blocks, k) {
    let min = Infinity;
    let queue = [];
    let count = 0;
    
    for(let block of blocks){
        //  if current block = 'W', increase count += 1
        count += (block === 'W');
        queue.push(block);
        
        if(queue.length === k){
            min = Math.min(min, count);
            //  remove the first element, if it = 'W', decrease count -= 1
            count -= (queue.shift() === 'W')
        }
    }
    
    return min;
};