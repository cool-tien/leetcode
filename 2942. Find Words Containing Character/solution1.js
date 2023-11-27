/**
    Time Complexity: O(nm)
        64 ~ 73ms           (?%)
    Space Complexity: O(m)
        44.42 ~ 45.42 MB    (?%)
    
    https://leetcode.com/problems/find-words-containing-character/submissions/1107132297/
        Runtime 64ms Beats ?%; Memory 44.42MB Beats ?%; 
    https://leetcode.com/problems/find-words-containing-character/submissions/1107134600/
        Runtime 72ms Beats ?%; Memory 44.74MB Beats ?%; 
    https://leetcode.com/problems/find-words-containing-character/submissions/1107135146/
        Runtime 73ms Beats ?%; Memory 45.42MB Beats ?%; 
    
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
    
    for(let i=0; i<words.length; i++)
        if(words[i].includes(x))
            result.push(i);
    return result;
};