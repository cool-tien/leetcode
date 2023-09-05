/**
    Time Complexity: O(n)
        55 ~ 72 ms      (17.95% ~ 82.56%)
    Space Complexity: O(1)
        44.1 ~ 44.7 MB  (14.87% ~ 43.59%)

    https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/submissions/1040804765/
        Runtime 72 ms, Beats 17.95%; Memory 44.3 MB, Beats 29.23%; 
    https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/submissions/1040805057/
        Runtime 68 ms, Beats 28.21%; Memory 44.7 MB, Beats 14.87%; 
    https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/submissions/1040805127/
        Runtime 55 ms, Beats 82.56%; Memory 44.1 MB, Beats 43.59%; 

 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    const end = s1.length - 2;
    s1 = s1.split("");
    s2 = s2.split("");

    for(let i=0; i<end; i++){
        if(s1[i] === s2[i+2] && s1[i+2] === s2[i])
            [s1[i], s1[i+2]] = [s1[i+2], s1[i]];
    }
    
    return s1.join("") === s2.join("");
};