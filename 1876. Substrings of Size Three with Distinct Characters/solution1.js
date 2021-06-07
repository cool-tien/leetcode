/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;
    
    for(let i=0; i<s.length-2; i++){
        //  next one or next two same, continue to skip
        if(s[i]==s[i+1] || s[i]==s[i+2])
            continue;
        if(new Set(s.substr(i, 3)).size==3)
            count++;
    }
        
    return count;
};