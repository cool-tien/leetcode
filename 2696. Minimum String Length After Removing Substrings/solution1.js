/**
    Time Complexity: O(n)
        74 ~ 98 ms      (29.89% ~ 95.73%)
    Space Complexity: O(0)
        46.1 ~ 46.9 MB  (38.79% ~ 67.26%)
    
    https://leetcode.com/problems/minimum-string-length-after-removing-substrings/submissions/954209312/
        Runtime 95 ms, Beats 36.65%; Memory 46.9 MB, Beats 38.79%;
    https://leetcode.com/problems/minimum-string-length-after-removing-substrings/submissions/956138155/
        Runtime 74 ms, Beats 95.73%; Memory 46.8 MB, Beats 38.79%; 
    https://leetcode.com/problems/minimum-string-length-after-removing-substrings/submissions/956138270/
        Runtime 98 ms，Beats 29.89%; Memory 46.1 MB, Beats 67.26%;

 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    while(s.includes("AB") || s.includes("CD")){
        s = s.replace(/AB/g, "");
        s = s.replace(/CD/g, "");
    }
    
    return s.length;
};