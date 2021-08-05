/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj = {};
    let freq = -1;
    
    for(let c of s)
        obj[c]?obj[c]++:obj[c]=1;
    
    for(let key in obj)
        if(freq==-1)
            freq = obj[key];
        else if(freq!=obj[key])
            return false;
    return true;
};