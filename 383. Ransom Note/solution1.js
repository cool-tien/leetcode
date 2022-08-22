/**
    O(n)
    108~161 ms (23.58%~77.38%)
    44.1~44.8 MB (61.72%~89.05%)

 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let hash = {};
    
    for(let c of magazine)
        hash[c]? hash[c]++: hash[c]=1;
    
    for(let c of ransomNote)
        if(hash[c] == null || hash[c] == 0)
            return false;
        else
            hash[c]--;
    return true;
};