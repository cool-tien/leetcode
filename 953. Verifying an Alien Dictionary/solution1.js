/**
    O(nm)
    76~115 ms    (19.44% ~ 85.01%)
    44.1~44.6 MB (10.77% ~ 38.17%)

    https://leetcode.com/submissions/detail/842999807/
        Runtime: 115 ms, faster than 19.44% of JavaScript online submissions for Verifying an Alien Dictionary.
        Memory Usage: 44.3 MB, less than 26.93% of JavaScript online submissions for Verifying an Alien Dictionary.
    https://leetcode.com/submissions/detail/843000858/
        Runtime: 76 ms, faster than 85.01% of JavaScript online submissions for Verifying an Alien Dictionary.
        Memory Usage: 44.1 MB, less than 38.17% of JavaScript online submissions for Verifying an Alien Dictionary.
    https://leetcode.com/submissions/detail/843000934/
        Runtime: 103 ms, faster than 44.03% of JavaScript online submissions for Verifying an Alien Dictionary.
        Memory Usage: 44.6 MB, less than 10.77% of JavaScript online submissions for Verifying an Alien Dictionary.

 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    //  rebuild order to hash object for improve searching performance
    let hash = {};
    let len = words.length - 1;
    
    //  (let i in order) default i was string data type
    // for(let i in order)
    //     hash[order[i]] = +i;
    
    for(let i=0; i<order.length; i++)
        hash[order[i]] = i;
    
    for(let i=0; i<len; i++){
        let s1 = words[i];
        let s2 = words[i+1];
        
        for(let j=0; j<s1.length; j++){
            //  a. s1[0 ~ s2.len] === s2[j], but s1 longer than s2
            //  b. s1[j] order index > s2[j]
            if(s2[j] === undefined || hash[s1[j]] > hash[s2[j]])
                return false;
            else if(hash[s1[j]] < hash[s2[j]])
                break;
        }
    }
    
    return true;
};