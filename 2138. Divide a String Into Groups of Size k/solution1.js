/**
    https://leetcode.com/submissions/detail/751625944/
    Runtime: 83 ms, faster than 59.46% of JavaScript online submissions for Divide a String Into Groups of Size k.
    Memory Usage: 42.3 MB, less than 61.26% of JavaScript online submissions for Divide a String Into Groups of Size k.

 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {
    let output = [];
    
    s = s.split("");
    while(s.length)
        output.push(s.splice(0, k).join("").padEnd(k, fill));
    return output;
};