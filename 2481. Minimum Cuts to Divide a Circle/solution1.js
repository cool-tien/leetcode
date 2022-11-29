/**
    O(1)
    69 ~ 107 ms     ()
    41.6 ~ 41.9 MB  ()

    [2022-11-27 12:33, UTC+8]

    https://leetcode.com/submissions/detail/850466366/
        Runtime: 107 ms, faster than 100.00% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
        Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
    https://leetcode.com/submissions/detail/850468431/
        Runtime: 69 ms, faster than 100.00% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
        Memory Usage: 41.7 MB, less than 100.00% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
    https://leetcode.com/submissions/detail/850468582/
        Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
        Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions for Minimum Cuts to Divide a Circle.

 * @param {number} n
 * @return {number}
 */
 var numberOfCuts = function(n) {
    if(n === 1) return 0;
    return (n % 2)? n: n/2;
};