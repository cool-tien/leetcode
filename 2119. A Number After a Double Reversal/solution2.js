/**
    O(1)
    54~98 ms     (45.51%~98.80%)
    41.3~42.4 MB (13.77%~99.70%)

    https://leetcode.com/submissions/detail/832408867/
        Runtime: 98 ms, faster than 45.51% of JavaScript online submissions for A Number After a Double Reversal.
        Memory Usage: 42.4 MB, less than 13.77% of JavaScript online submissions for A Number After a Double Reversal.
    https://leetcode.com/submissions/detail/832415173/
        Runtime: 72 ms, faster than 82.63% of JavaScript online submissions for A Number After a Double Reversal.
        Memory Usage: 41.3 MB, less than 99.70% of JavaScript online submissions for A Number After a Double Reversal.
    https://leetcode.com/submissions/detail/832416480/
        Runtime: 54 ms, faster than 98.80% of JavaScript online submissions for A Number After a Double Reversal.
        Memory Usage: 41.3 MB, less than 99.70% of JavaScript online submissions for A Number After a Double Reversal.

 * @param {number} num
 * @return {boolean}
 */
 const isSameAfterReversals = (num) =>
    (num === 0 || num.toString().at(-1) !== '0');