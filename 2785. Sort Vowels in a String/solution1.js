/**
    Time Complexity: O(n + m log n)
        177 ~ 199 ms        (39.53% ~ 71.38%)
    Space Complexity: O(n + m)
        63.43 ~ 64.07 MB    (68.99% ~ 75.07%)
    
    https://leetcode.com/problems/sort-vowels-in-a-string/submissions/1143836153/
        Runtime 177 ms Beats 71.38%; Memory 64.07 MB Beats 68.99%; 
    https://leetcode.com/problems/sort-vowels-in-a-string/submissions/1143838250/
        Runtime 197 ms Beats 41.82%; Memory 63.43 MB Beats 75.07%; 
    https://leetcode.com/problems/sort-vowels-in-a-string/submissions/1143838487/
        Runtime 199 ms Beats 39.53%; Memory 63.53 MB Beats 74.31%; 

 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
    let arr_vowels = [];
    let output = "";
    let idx = 0;
    
    for(let i=0; i<s.length; i++)
        if(vowels.has(s[i]))
            arr_vowels.push(s[i]);
    arr_vowels.sort();
    
    for(const c of s)
        output += vowels.has(c)?
            arr_vowels[idx++]: c;
    return output;
};