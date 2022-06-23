/**
    https://leetcode.com/submissions/detail/729143594/
    Runtime: 71 ms, faster than 78.42% of JavaScript online submissions for Percentage of Letter in String.
    Memory Usage: 42.2 MB, less than 30.85% of JavaScript online submissions for Percentage of Letter in String.

 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
    let appear = 0;
    
    for(let c of s)
        if(c == letter)
            appear += 1;
    return ~~((appear / s.length) * 100);
};