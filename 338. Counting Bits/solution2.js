/**
	https://leetcode.com/submissions/detail/651073597/
	Runtime: 202 ms, faster than 16.86% of JavaScript online submissions for Counting Bits.
	Memory Usage: 53.8 MB, less than 12.75% of JavaScript online submissions for Counting Bits.
	
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n+1);
    
    for(let i=0; i<res.length; i++)
        res[i] = i;
    return res.map(num=>num.toString(2).split("").filter(x=>x=='1').length);
};