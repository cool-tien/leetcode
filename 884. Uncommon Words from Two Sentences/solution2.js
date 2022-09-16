/**
    O(n)
    75~109 ms (21.28%~82.62%)
    42.0~42.5 MB (47.52%~87.23%)
    
    https://leetcode.com/submissions/detail/801245622/
        Runtime: 95 ms, faster than 48.58% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42.5 MB, less than 56.38% of JavaScript online submissions for Uncommon Words from Two Sentences.
    https://leetcode.com/submissions/detail/801248113/
        Runtime: 109 ms, faster than 21.28% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42 MB, less than 87.23% of JavaScript online submissions for Uncommon Words from Two Sentences.
    https://leetcode.com/submissions/detail/801248686/
        Runtime: 75 ms, faster than 82.62% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42.5 MB, less than 47.52% of JavaScript online submissions for Uncommon Words from Two Sentences.

 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let words = (s1 + " " + s2).split(" ");
    let map = new Map();
    let uncommon = [];
    
    for(let word of words)
        map.set(word, (map.get(word) + 1) || 1);
    
    for(let [word, appear] of map)
        if(appear === 1)
            uncommon.push(word);
    return uncommon;
};