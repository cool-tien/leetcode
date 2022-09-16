/**
    O(n)
    89~124 ms (6.03%~59.57%)
    41.6~42.1 MB (82.62%~98.94%)
    
    https://leetcode.com/submissions/detail/801236335/
        Runtime: 106 ms, faster than 28.02% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42.1 MB, less than 87.23% of JavaScript online submissions for Uncommon Words from Two Sentences.
    https://leetcode.com/submissions/detail/801239602/
        Runtime: 89 ms, faster than 59.57% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 41.6 MB, less than 98.94% of JavaScript online submissions for Uncommon Words from Two Sentences.
    https://leetcode.com/submissions/detail/801240748/
        Runtime: 124 ms, faster than 6.03% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42.1 MB, less than 82.62% of JavaScript online submissions for Uncommon Words from Two Sentences.

 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let uncommon = new Set();
    let appeared = new Set();
    
    for(let word of s1.split(" "))
        if(appeared.has(word))
            continue;
        //  appear twice time
        else if(uncommon.has(word)){
            uncommon.delete(word);
            appeared.add(word);
        }
        else
            uncommon.add(word);
    
    for(let word of s2.split(" "))
        if(appeared.has(word))
            continue;
        else if(uncommon.has(word)){
            uncommon.delete(word);
            appeared.add(word);
        }
        else
            uncommon.add(word);
        
    return [...uncommon];
};