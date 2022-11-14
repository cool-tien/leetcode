/**
    O(n)
    84~100 ms    (40.89%~72.84%)
    42.0~42.6 MB (26.52%~79.23%)

    https://leetcode.com/submissions/detail/842975206/
        Runtime: 100 ms, faster than 40.89% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
        Memory Usage: 42 MB, less than 79.23% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
    https://leetcode.com/submissions/detail/842977712/
        Runtime: 94 ms, faster than 56.87% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
        Memory Usage: 42.3 MB, less than 39.62% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
    https://leetcode.com/submissions/detail/842977787/
        Runtime: 84 ms, faster than 72.84% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
        Memory Usage: 42.6 MB, less than 26.52% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.

 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    let output = "";
    
    for(let i=0; i<s.length; i++)
        if(s[i+2] === '#'){
            let code = +(s.substring(i, i+2)) + 96;
            
            output += String.fromCharCode(code);
            i += 2;
        }
        else
            output += String.fromCharCode((+s[i]) + 96);
    
    return output;
};