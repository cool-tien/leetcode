/**
    O(1)

    https://leetcode.com/submissions/detail/832406772/
        Runtime: 102 ms, faster than 32.93% of JavaScript online submissions for A Number After a Double Reversal.
        Memory Usage: 42.7 MB, less than 5.69% of JavaScript online submissions for A Number After a Double Reversal.
    https://leetcode.com/submissions/detail/832407791/
        Runtime: 62 ms, faster than 93.11% of JavaScript online submissions for A Number After a Double Reversal.
        Memory Usage: 41.1 MB, less than 100.00% of JavaScript online submissions for A Number After a Double Reversal.
    https://leetcode.com/submissions/detail/832407880/
        Runtime: 72 ms, faster than 82.63% of JavaScript online submissions for A Number After a Double Reversal.
        Memory Usage: 41.9 MB, less than 76.05% of JavaScript online submissions for A Number After a Double Reversal.

 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    const reverseNumber = num =>
        Number(num.toString().split("").reverse().join(""));
    
    let reversed = reverseNumber(reverseNumber(num));
    return num === reversed;
};