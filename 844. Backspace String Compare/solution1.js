/**
    https://leetcode.com/submissions/detail/690585955/
    Runtime: 65 ms, faster than 82.98% of JavaScript online submissions for Backspace String Compare.
    Memory Usage: 43.2 MB, less than 29.78% of JavaScript online submissions for Backspace String

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const buildString = (s) => {
        let arr = [];
        
        for(let c of s)
            (c === "#")? arr.pop(): arr.push(c);
        return arr.join("");
    }
    
    return buildString(s) === buildString(t);
};