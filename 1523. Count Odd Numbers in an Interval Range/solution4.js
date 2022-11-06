/**
    O(1)
    48~133 ms    (56.28%~100.00%)
    41.7~42.7 MB (5.94%~75.06%)

    https://leetcode.com/submissions/detail/837707933/
        Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
        Memory Usage: 42.7 MB, less than 5.94% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
    https://leetcode.com/submissions/detail/837738131/
        Runtime: 133 ms, faster than 56.28% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
        Memory Usage: 41.8 MB, less than 75.06% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
    https://leetcode.com/submissions/detail/837738347/
        Runtime: 100 ms, faster than 69.67% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
        Memory Usage: 41.7 MB, less than 75.06% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
    https://leetcode.com/submissions/detail/837739006/
        Runtime: 77 ms, faster than 90.86% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
        Memory Usage: 41.8 MB, less than 75.06% of JavaScript online submissions for Count Odd Numbers in an Interval Range.

 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 const countOdds = (low, high) => (!(low % 2) && !(high % 2))? (high - low) / 2: ~~((high - low) / 2) + 1;