/**
	https://leetcode.com/submissions/detail/649145407/
	Runtime: 78 ms, faster than 61.07% of JavaScript online submissions for Compare Version Numbers.
	Memory Usage: 42.2 MB, less than 18.13% of JavaScript online submissions for Compare Version Numbers.
	
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let ver1 = version1.split(".");
    let ver2 = version2.split(".");
    let len = Math.max(ver1.length, ver2.length);
    
    for(let i=0 ;i<len; i++){
        let num1 = parseInt(ver1[i]) || 0;
        let num2 = parseInt(ver2[i]) || 0;
        
        if(num1>num2)
            return 1;
        else if(num1<num2)
            return -1;
    }
    
    return 0;
};