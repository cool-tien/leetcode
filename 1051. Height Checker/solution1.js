/**
    O(n log(n) + n)
    68~93 ms (52.94%~90.59%)
    41.68~42.2 MB (44.94%~98.38%)

    https://leetcode.com/submissions/detail/796014506/
        Runtime: 68 ms, faster than 90.59% of JavaScript online submissions for Height Checker.
        Memory Usage: 41.6 MB, less than 98.38% of JavaScript online submissions for Height Checker.
    https://leetcode.com/submissions/detail/796122983/
        Runtime: 93 ms, faster than 52.94% of JavaScript online submissions for Height Checker.
        Memory Usage: 42.1 MB, less than 55.16% of JavaScript online submissions for Height Checker.
    https://leetcode.com/submissions/detail/796123180/
        Runtime: 76 ms, faster than 80.06% of JavaScript online submissions for Height Checker.
        Memory Usage: 42.2 MB, less than 44.94% of JavaScript online submissions for Height Checker.

 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    let sorted = [...heights].sort((a, b) => a-b);
    let diff = 0;
    
    for(let i=0; i<heights.length; i++)
        if(heights[i] !== sorted[i])
            diff++;
    return diff;
};