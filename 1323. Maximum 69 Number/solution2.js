/**
    O(n)
    58~100 ms    (41.76%~98.19%)
    41.9~42.1 MB (30.02%~54.18%)

    https://leetcode.com/submissions/detail/838394734/
        Runtime: 61 ms, faster than 97.07% of JavaScript online submissions for Maximum 69 Number.
        Memory Usage: 42.1 MB, less than 42.66% of JavaScript online submissions for Maximum 69 Number.
    https://leetcode.com/submissions/detail/838396739/
        Runtime: 58 ms, faster than 98.19% of JavaScript online submissions for Maximum 69 Number.
        Memory Usage: 42.1 MB, less than 30.02% of JavaScript online submissions for Maximum 69 Number.
    https://leetcode.com/submissions/detail/838397206/
        Runtime: 100 ms, faster than 41.76% of JavaScript online submissions for Maximum 69 Number.
        Memory Usage: 41.9 MB, less than 54.18% of JavaScript online submissions for Maximum 69 Number.

 * @param {number} num
 * @return {number}
 */
 const maximum69Number = num => ~~(""+num).replace('6', '9');