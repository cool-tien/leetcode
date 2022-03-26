/**
	https://leetcode.com/submissions/detail/650296933/
	Runtime: 56 ms, faster than 97.08% of JavaScript online submissions for Compare Version Numbers.
	Memory Usage: 42.5 MB, less than 8.23% of JavaScript online submissions for Compare Version Numbers.
	
	
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let code1 = version1.split(".").map(x=>Number(x));
    let code2 = version2.split(".").map(x=>Number(x));
    let diff = code1.length-code2.length;
    
    diff<=0? 
        code1 = code1.concat(new Array(-(diff)).fill(0)):
        code2 = code2.concat(new Array(diff).fill(0));
    
    let num1 = ~~code1.join("");
    let num2 = ~~code2.join("");
    
    return num1>num2? 1: num2>num1? -1: 0;
};