/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    t = t.split("");
    
    for(let c of s){
        let idx = ;
        
        if(idx==-1)
            return c;
        else
            t.splice(idx, 1);
    }
    
    return t[0];
};
