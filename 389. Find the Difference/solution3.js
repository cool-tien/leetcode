/**
    O(n)
    75~103 ms    (69.98%~92.08%)
    43.0~43.5 MB (81.43%~88.20%)

    https://leetcode.com/submissions/detail/842407707/
        Runtime: 103 ms, faster than 69.98% of JavaScript online submissions for Find the Difference.
        Memory Usage: 43.3 MB, less than 83.45% of JavaScript online submissions for Find the Difference.
    https://leetcode.com/submissions/detail/842408091/
        Runtime: 75 ms, faster than 92.08% of JavaScript online submissions for Find the Difference.
        Memory Usage: 43 MB, less than 88.20% of JavaScript online submissions for Find the Difference.
    https://leetcode.com/submissions/detail/842408361/
        Runtime: 92 ms, faster than 79.40% of JavaScript online submissions for Find the Difference.
        Memory Usage: 43.5 MB, less than 81.43% of JavaScript online submissions for Find the Difference.

 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let code = 0;
    
    for(let i=0; i<s.length; i++){
        code += t[i].charCodeAt();
        code += -s[i].charCodeAt();
    }
    code += t.at(-1).charCodeAt();
    
    return String.fromCharCode(code);
};