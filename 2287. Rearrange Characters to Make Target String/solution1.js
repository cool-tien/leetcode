/**
    O(n+2m)
    59~79 ms
    42.4~42.9 MB

 * @param {string} s
 * @param {string} target
 * @return {number}
 */
 var rearrangeCharacters = function(s, target) {
    let hash_s = {};
    let hash_target = {};
    let arr_match = [];
    
    for(let c of s)
        hash_s[c]? hash_s[c]++: hash_s[c]=1;
    for(let c of target)
        hash_target[c]? hash_target[c]++: hash_target[c]=1;
    
    for(let c in hash_target)
        //  exist same char, count appear time
        if(hash_s[c])
            arr_match.push(~~(hash_s[c] / hash_target[c]));
        //  char not exist, unable to match
        else
            return 0;
    return Math.min(...arr_match);
};