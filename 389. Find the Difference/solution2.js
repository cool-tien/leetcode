/**
	https://leetcode.com/submissions/detail/636143970/
	Runtime: 70 ms, faster than 95.79% of JavaScript online submissions for Find the Difference.
	Memory Usage: 44.4 MB, less than 11.18% of JavaScript online submissions for Find the Difference.
	
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    //  get both and sum charcode (t>s → t-s = remain different)
    let code_t = t.split("").map(c=>c.charCodeAt()).reduce((a, b)=>a+b, 0);
    let code_s = s.split("").map(c=>c.charCodeAt()).reduce((a, b)=>a+b, 0);
    
    return String.fromCharCode(code_t-code_s);
};