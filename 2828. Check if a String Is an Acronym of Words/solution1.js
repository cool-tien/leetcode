/**
    Time Complexity: O(m)
        63 ~ 69 ms      (58.92% ~ 84.31%)
    Space Complexity: O(0)
        44.9 ~ 45.3 MB  (17.90% ~ 50.62%)
    
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1027190683/
        Runtime 68 ms, Beats 63.93%; Memory 45.3 MB, Beats 17.90%; 
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1027197509/
        Runtime 63 ms, Beats 84.31%; Memory 44.9 MB, Beats 50.62%; 
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1027197805/
        Runtime 69 ms, Beats 58.92%; Memory 45.0 MB, Beats 41.74%; 

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