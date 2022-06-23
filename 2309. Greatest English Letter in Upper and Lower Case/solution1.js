/**
    https://leetcode.com/submissions/detail/729029174/
    Runtime: 85 ms, faster than 84.24% of JavaScript online submissions for Greatest English Letter in Upper and Lower Case.
    Memory Usage: 44.3 MB, less than 71.35% of JavaScript online submissions for Greatest English Letter in Upper and Lower Case.

 * @param {string} s
 * @return {string}
 */
 var greatestLetter = function(s) {
    let upper = new Set();
    let lower = new Set();
    let res = 0;
    
    for(let c of s){
        let code = c.charCodeAt();
        let is_lower = code>=97;
        
        is_lower? lower.add(c): upper.add(c);
        
        let found = is_lower? 
            lower.has(c)==upper.has(c.toUpperCase()): 
            lower.has(c.toLowerCase())==upper.has(c);
        
        if(found){
            code = is_lower? code-32: code;
            
            if(code > res)
                res = code;
        }
    }
    
    return (res==0)? "": String.fromCharCode(res);
};