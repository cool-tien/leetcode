/**
    Time Complexity: O(2n)
        56 ~ 64 ms      (34.94% ~ 70.48%)
    Space Complexity: O(n)
        42.5 ~ 42.8 MB  (22.29% ~ 30.12%)
    
    https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/submissions/976749929/
        Runtime 56 ms, Beats 70.48%; Memory 42.5 MB, Beats 30.12%; 
    https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/submissions/976750201/
        Runtime 64 ms, Beats 34.94%; Memory 42.8 MB, Beats 22.29%;
    https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/submissions/976750415/
        Runtime 58 ms, Beats 62.65%; Memory 42.6 MB, Beats 27.11%;

 * @param {string} s
 * @return {string}
 */
const freqAlphabets = s => {
    const nums = s.match(/[0-9][0-9]#|[0-9]/g);
    let output = "";
    
    for(const num of nums)
        output += String.fromCharCode(parseInt(num) + 96);
    return output;
};