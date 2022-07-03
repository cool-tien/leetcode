/**
    https://leetcode.com/submissions/detail/737082622/
    Runtime: 112 ms, faster than 28.69% of JavaScript online submissions for Strong Password Checker II.
    Memory Usage: 42.1 MB, less than 60.59% of JavaScript online submissions for Strong Password Checker II.

 * @param {string} password
 * @return {boolean}
 */
 var strongPasswordCheckerII = function(password) {
    const isLowercase = (str)=>
        (str.match(/[a-z]/g) || []).length >= 1;
    
    const isUppercase = (str)=>
        (str.match(/[A-Z]/g) || []).length >= 1;
    
    const isNumber = (str)=>
        (str.match(/[0-9]/g) || []).length >= 1;
    
    const isSpecial = (str)=>{
        let set = new Set("!@#$%^&*()-+");
        
        for(let c of str)
            if(set.has(c))
                return true;
        return false;
    }
    
    const samePosition = (str)=>{
        for(let i=0; i<str.length-1; i++)
            if(str[i] == str[i+1])
                return true;
        return false;
    }
    
    return (password.length >= 8) &&
        isLowercase(password) && 
        isUppercase(password) && 
        isNumber(password) && 
        isSpecial(password) && 
        !samePosition(password)
};