/**
    O(n)
    78~117 ms    (30.58%~86.86%)
    43.6~43.7 MB (15.58%~17.47%)

    https://leetcode.com/submissions/detail/838384800/
        Runtime: 117 ms, faster than 30.58% of JavaScript online submissions for Number of 1 Bits.
        Memory Usage: 43.6 MB, less than 17.47% of JavaScript online submissions for Number of 1 Bits.
    https://leetcode.com/submissions/detail/838386816/
        Runtime: 117 ms, faster than 30.58% of JavaScript online submissions for Number of 1 Bits.
        Memory Usage: 43.7 MB, less than 15.85% of JavaScript online submissions for Number of 1 Bits.
    https://leetcode.com/submissions/detail/838386896/
        Runtime: 78 ms, faster than 86.86% of JavaScript online submissions for Number of 1 Bits.
        Memory Usage: 43.7 MB, less than 15.85% of JavaScript online submissions for Number of 1 Bits.

 * @param {number} n - a positive integer
 * @return {number}
 */
 const hammingWeight = n => n.toString(2).split("").filter(c => c === '1').length;