/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    if(s.length==new Set(s).size) return -1;
    let max = -1;
    
    for(let c of s){
        let distance = s.lastIndexOf(c)-s.indexOf(c)-1;
        
        if(distance>max)
            max = distance;
    }
    
    return max;
};