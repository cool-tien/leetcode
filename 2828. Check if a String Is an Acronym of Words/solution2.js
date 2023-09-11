/**
    Time Complexity: O(n)
        53 ~ 71 ms      (50.12% ~ 98.69%)
    Space Complexity: O(1)
        44.1 ~ 45.3 MB  (17.90% ~ 96.71%)
    
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1046115049/
        Runtime 63 ms, Beats 84.31%; Memory 44.8 MB, Beats 59.33%; 
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1046116215/
        Runtime 71 ms, Beats 50.12%; Memory 45.3 MB, Beats 17.90%; 
    https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1046116564/
        Runtime 53 ms, Beats 98.69%; Memory 44.1 MB, Beats 96.71%; 

 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    //  acronym must length same
    if(s.length !== words.length) return false;
    
    const acronym = words.reduce((acc, cur) => acc + cur[0], "");
    return acronym === s;
};