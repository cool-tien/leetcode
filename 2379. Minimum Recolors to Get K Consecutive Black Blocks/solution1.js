/**
    O(nm)
    77~156 ms    ( 5.03%~73.21%)
    44.1~44.4 MB (11.04%~13.31%)

    https://leetcode.com/submissions/detail/825578106/
        Runtime: 77 ms, faster than 73.21% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
        Memory Usage: 44.4 MB, less than 11.04% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
    https://leetcode.com/submissions/detail/825578815/
        Runtime: 117 ms, faster than 18.34% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
        Memory Usage: 44.1 MB, less than 13.31% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
    https://leetcode.com/submissions/detail/825578815/
        Runtime: 156 ms, faster than 5.03% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.
        Memory Usage: 44.4 MB, less than 11.04% of JavaScript online submissions for Minimum Recolors to Get K Consecutive Black Blocks.

 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
 var minimumRecolors = function(blocks, k) {
    let min = Infinity;
    let end = blocks.length - k;
    
    for(let i=0; i<=end; i++){
        //  count the substring exits 'W'
        let w_count = blocks.substr(i, k).split("").filter(c => c === 'W').length;
        
        min = Math.min(min, w_count);
    }
    
    return min;
};