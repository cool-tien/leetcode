/**
    O(1)
    85~100 ms    (56.32%~83.91%)
    41.6~42.5 MB (65.52%~98.85%)

    https://leetcode.com/submissions/detail/828373663/
        Runtime: 94 ms, faster than 68.97% of JavaScript online submissions for Repeated String Match.
        Memory Usage: 42.5 MB, less than 65.52% of JavaScript online submissions for Repeated String Match.
    https://leetcode.com/submissions/detail/828374264/
        Runtime: 85 ms, faster than 83.91% of JavaScript online submissions for Repeated String Match.
        Memory Usage: 41.6 MB, less than 98.85% of JavaScript online submissions for Repeated String Match.
    https://leetcode.com/submissions/detail/828374395/
        Runtime: 100 ms, faster than 56.32% of JavaScript online submissions for Repeated String Match.
        Memory Usage: 42 MB, less than 91.95% of JavaScript online submissions for Repeated String Match.

 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let n = ~~(b.length / a.length);
    
    if(a.repeat(n).includes(b))
        return n;
    else if(a.repeat(n+1).includes(b))
        return n + 1;
    else if(a.repeat(n+2).includes(b))
        return n + 2;
    return -1;
};