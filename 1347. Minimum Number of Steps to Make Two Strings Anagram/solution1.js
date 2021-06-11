/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    if(s==t) return 0;
    
    let obj = {};
    let count = 0;
    
    for(let c of t)
        obj[c] = obj[c]?obj[c]+1:1;
    for(let c of s)
        if(obj[c])
            obj[c] -= 1;
    
    for(let key in obj)
        if(obj[key]!=0)
            count += obj[key];
    return count;
};