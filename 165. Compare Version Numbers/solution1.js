/**
	https://leetcode.com/submissions/detail/649131908/
	Runtime: 80 ms, faster than 58.13% of JavaScript online submissions for Compare Version Numbers.
	Memory Usage: 42.4 MB, less than 14.40% of JavaScript online submissions for Compare Version Numbers.
	
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let code1 = version1.split(".").filter(x=>x!="").map(x=>Number(x));
    let code2 = version2.split(".").filter(x=>x!="").map(x=>Number(x));
    let diff = code1.length-code2.length;
    
    if(diff<=0)
        code1 = code1.concat(new Array(-(diff)).fill(0));
    else
        code2 = code2.concat(new Array(diff).fill(0));
    
    for(let i=0 ;i<code1.length; i++)
        if(code1[i]>code2[i])
            return 1;
        else if(code1[i]<code2[i])
            return -1;
    return 0;
};