/**
    https://leetcode.com/submissions/detail/703526191/
    Runtime: 216 ms, faster than 20.45% of JavaScript online submissions for Shifting Letters.
    Memory Usage: 65.1 MB, less than 27.27% of JavaScript online submissions for Shifting Letters.

 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
 var shiftingLetters = function(s, shifts) {
    const convertToLetter = (num) =>
        String.fromCharCode(num % 26 + 97);
    
    let total_shift = shifts.reduce((a,b) => a+b);
    s = s.split("").map(x => x.charCodeAt() - 97);
    
    for(let i=0; i<s.length; i++){
        s[i] = convertToLetter(s[i] + total_shift);
        total_shift -= shifts[i];
        
        if(total_shift < 0)
            total_shift = (total_shift % 26) + 26;
    }
    
    return s.join("");
};
