/**
    O(nm)
    73~103 ms    (58.29%~89.45%)
    43.4~44.1 MB (55.28%~84.92%)

    https://leetcode.com/submissions/detail/816882356/
        Runtime: 75 ms, faster than 86.94% of JavaScript online submissions for Sum of Digits of String After Convert.
        Memory Usage: 43.4 MB, less than 84.92% of JavaScript online submissions for Sum of Digits of String After Convert.
    https://leetcode.com/submissions/detail/816885652/
        Runtime: 73 ms, faster than 89.45% of JavaScript online submissions for Sum of Digits of String After Convert.
        Memory Usage: 43.7 MB, less than 76.38% of JavaScript online submissions for Sum of Digits of String After Convert.
    https://leetcode.com/submissions/detail/816886065/
        Runtime: 103 ms, faster than 58.29% of JavaScript online submissions for Sum of Digits of String After Convert.
        Memory Usage: 44.1 MB, less than 55.28% of JavaScript online submissions for Sum of Digits of String After Convert.

 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    //  convert to char code
    s = s.split("").map(c => c.charCodeAt() - 96).join("");
    
    //  operation k times
    for(let i=0; i<k; i++)
        //  sum of its digits
        s = String(s.split("").reduce((a, b) => (~~a) + (~~b), 0));
    return ~~s;
};