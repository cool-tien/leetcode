/**
    O(n log(n) + n)
    98~111 ms (21.66%~42.11%)
    42.0~42.5 MB (24.29~78.24%)

    https://leetcode.com/submissions/detail/796125229/
        Runtime: 109 ms, faster than 23.79% of JavaScript online submissions for Height Checker.
        Memory Usage: 42 MB, less than 78.24% of JavaScript online submissions for Height Checker.
    https://leetcode.com/submissions/detail/796126757/
        Runtime: 111 ms, faster than 21.66% of JavaScript online submissions for Height Checker.
        Memory Usage: 42.5 MB, less than 24.29% of JavaScript online submissions for Height Checker.
    https://leetcode.com/submissions/detail/796127055/
        Runtime: 98 ms, faster than 42.11% of JavaScript online submissions for Height Checker.
        Memory Usage: 42.1 MB, less than 55.16% of JavaScript online submissions for Height Checker.

 * @param {number[]} heights
 * @return {number}
 */
 const heightChecker = heights =>
    [...heights].sort((a, b) => a-b).filter((x, i) => x !== heights[i]).length;