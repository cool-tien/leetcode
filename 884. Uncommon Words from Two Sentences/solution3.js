/**
    O(n)
    65~111 ms (18.44%~94.33%)
    42.4~42.8 MB (34.75%~56.38%)
    
    https://leetcode.com/submissions/detail/801253277/
        Runtime: 111 ms, faster than 18.44% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42.8 MB, less than 34.75% of JavaScript online submissions for Uncommon Words from Two Sentences.
    https://leetcode.com/submissions/detail/801253868/
        Runtime: 65 ms, faster than 94.33% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42.5 MB, less than 56.38% of JavaScript online submissions for Uncommon Words from Two Sentences.

        Runtime: 97 ms, faster than 44.33% of JavaScript online submissions for Uncommon Words from Two Sentences.
        Memory Usage: 42.4 MB, less than 56.38% of JavaScript online submissions for Uncommon Words from Two Sentences.

 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let words = (s1 + " " + s2).split(" ");
    let hash = {};
    let uncommon = [];
    
    for(let word of words)
        hash[word] = (hash[word] + 1) || 1;
        
    for(let word in hash)
        if(hash[word] === 1)
            uncommon.push(word);
    return uncommon;
};