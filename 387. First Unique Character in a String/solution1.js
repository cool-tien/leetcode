/**
    O(2n)
    125~183 ms
    45~45.1 MB

 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let hash = {};
    let unique = [];
    
    //  build hash map
    for(let c of s)
        hash[c]? hash[c]++: hash[c]=1;
    
    //  filter out unique (just appear 1 time)
    for(let c in hash)
        if(hash[c] === 1)
            unique.push(c);
    
    //  return first unique
    for(let i=0; i<s.length; i++)
        if(unique.includes(s[i]))
            return i;
    return -1;
};