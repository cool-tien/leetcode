/**
	https://leetcode.com/submissions/detail/658869639/
	Runtime: 60 ms, faster than 95.71% of JavaScript online submissions for Valid Parentheses.
	Memory Usage: 42.6 MB, less than 24.72% of JavaScript online submissions for Valid Parentheses.
	
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let res = [];
    let obj = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    
    for(let c of s)
        //  not exist close brackets, c = open brackets
        if(!obj[c])
            res.push(c);
        //  same type of bracket
        else if(res.pop()==obj[c])
            continue;
        //  not match
        else
            return false;
    return !res.length;
};
