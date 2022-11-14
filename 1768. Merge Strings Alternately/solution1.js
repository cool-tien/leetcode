/**
    O(n)
    66~102 ms    (38.64%~90.91%)
    42.3~42.7 MB (25.87%~51.75%)

    https://leetcode.com/submissions/detail/842385052/
        Runtime: 66 ms, faster than 90.91% of JavaScript online submissions for Merge Strings Alternately.
        Memory Usage: 42.7 MB, less than 25.87% of JavaScript online submissions for Merge Strings Alternately.
    https://leetcode.com/submissions/detail/842409833/
        Runtime: 89 ms, faster than 66.08% of JavaScript online submissions for Merge Strings Alternately.
        Memory Usage: 42.4 MB, less than 51.75% of JavaScript online submissions for Merge Strings Alternately.
    https://leetcode.com/submissions/detail/842409935/
        Runtime: 102 ms, faster than 38.64% of JavaScript online submissions for Merge Strings Alternately.
        Memory Usage: 42.3 MB, less than 51.75% of JavaScript online submissions for Merge Strings Alternately.

 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let output = "";
    let len = Math.max(word1.length, word2.length);
    
    for(let i=0; i<len; i++){
        output += word1[i] || "";
        output += word2[i] || "";
    }
    
    return output;
};