/**
    O(n)
    141~231 ms
    46.6~47.4 MB

 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let roman = {
        "I": 1, 
        "V": 5, 
        "X": 10, 
        "L": 50, 
        "C": 100, 
        "D": 500, 
        "M": 1000
    };
    let sum = 0;
    let len = s.length - 1;
    
    for(let i=0; i<len; i++)
        sum += (roman[s[i]] >= roman[s[i+1]])? roman[s[i]]: -roman[s[i]];
    return sum + roman[s[len]];
};