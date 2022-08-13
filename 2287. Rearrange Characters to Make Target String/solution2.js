/**
    O(n+2m)
    65~96 ms
    42.2~42.9 MB

 * @param {string} s
 * @param {string} target
 * @return {number}
 */
 var rearrangeCharacters = function(s, target) {
    let hash_s = {};
    let hash_target = {};
    let min_appear = Infinity;
    
    for(let c of s)
        hash_s[c]? hash_s[c]++: hash_s[c]=1;
    for(let c of target)
        hash_target[c]? hash_target[c]++: hash_target[c]=1;
    
    for(let c in hash_target)
        //  exist same char, count appear time
        if(hash_s[c]){
            let min = ~~(hash_s[c] / hash_target[c]);
            
            if(min_appear > min)
                min_appear = min;
        }
        //  char not exist, unable to match
        else
            return 0;
    return min_appear;
};