/**
    O(n)
    70~107 ms    (22.38%~82.38%)
    41.8~42.4 MB (26.19%~80.00%)

    https://leetcode.com/submissions/detail/814621342/
        Runtime: 94 ms, faster than 49.52% of JavaScript online submissions for Number of Common Factors.
        Memory Usage: 41.8 MB, less than 69.52% of JavaScript online submissions for Number of Common Factors.
    https://leetcode.com/submissions/detail/814622160/
        Runtime: 107 ms, faster than 22.38% of JavaScript online submissions for Number of Common Factors.
        Memory Usage: 42.1 MB, less than 53.33% of JavaScript online submissions for Number of Common Factors.
    https://leetcode.com/submissions/detail/814622542/
        Runtime: 99 ms, faster than 40.48% of JavaScript online submissions for Number of Common Factors.
        Memory Usage: 42.4 MB, less than 26.19% of JavaScript online submissions for Number of Common Factors.
    https://leetcode.com/submissions/detail/814623377/
        Runtime: 70 ms, faster than 82.38% of JavaScript online submissions for Number of Common Factors.
        Memory Usage: 41.8 MB, less than 80.00% of JavaScript online submissions for Number of Common Factors.

 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var commonFactors = function(a, b) {
    let end = Math.min(a, b);
    let count = 0;
    
    for(let i=1; i<=end; i++)
        if( (a%i === 0) && (b%i === 0) )
            count++;
    return count;
};