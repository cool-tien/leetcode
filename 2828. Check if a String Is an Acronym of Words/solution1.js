/**
    Time Complexity: O(m)
        63 ~ 69 ms      (?%)
    Space Complexity: O(0)
        44.9 ~ 45.3 MB  (?%)

    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1027190683/
        Runtime 68 ms, Beats ?%; Memory 45.3 MB, Beats ?%; 
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1027197509/
        Runtime 63 ms, Beats ?%; Memory 44.9 MB, Beats ?%; 
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1027197805/
        Runtime 69 ms, Beats ?%; Memory 45.0 MB, Beats ?%; 

 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    //  acronym must length same
    if(s.length !== words.length) return false;

    for(let i=0; i<words.length; i++)
        if(words[i][0] !== s[i])
            return false;
    return true;
};