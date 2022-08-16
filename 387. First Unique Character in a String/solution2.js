/**
    O(n²)
    111~145 ms
    44.8~45.2 MB

 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for(let i=0; i<s.length; i++){
        let is_unique = true;
        
        for(let j=0; j<s.length; j++)
            if(i === j)
                continue;
            else if(s[i] === s[j]){
                is_unique = false;
                break;
            }
        
        if(is_unique)
            return i;
    }
    
    return -1;
};