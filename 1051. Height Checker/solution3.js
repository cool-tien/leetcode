/**
    O(n log(n) + n)
    90~98 ms (42.11%~58.70%)
    41.8~42.3 MB (44.94%~93.02%)

    https://leetcode.com/submissions/detail/796129929/
        Runtime: 93 ms, faster than 52.94% of JavaScript online submissions for Height Checker.
        Memory Usage: 42.3 MB, less than 44.94% of JavaScript online submissions for Height Checker.
    https://leetcode.com/submissions/detail/796132074/
        Runtime: 90 ms, faster than 58.70% of JavaScript online submissions for Height Checker.
        Memory Usage: 42.3 MB, less than 44.94% of JavaScript online submissions for Height Checker.
    https://leetcode.com/submissions/detail/796132387/
        Runtime: 98 ms, faster than 42.11% of JavaScript online submissions for Height Checker.
        Memory Usage: 41.8 MB, less than 93.02% of JavaScript online submissions for Height Checker.

 * @param {number[]} heights
 * @return {number}
 */
 const heightChecker = heights =>
 [...heights].sort((a, b) => a-b)
     .reduce((acc, item, index) => acc += (item !== heights[index]));