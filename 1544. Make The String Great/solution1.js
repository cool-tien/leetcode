/**
    O(n)
    124~139 ms   (15.53%~31.07%)
    44.8~45.7 MB (19.42%~36.89%)

    https://leetcode.com/submissions/detail/809472895/
        Runtime: 139 ms, faster than 15.53% of JavaScript online submissions for Make The String Great.
        Memory Usage: 45.7 MB, less than 19.42% of JavaScript online submissions for Make The String Great.
    https://leetcode.com/submissions/detail/809475321/
        Runtime: 124 ms, faster than 31.07% of JavaScript online submissions for Make The String Great.
        Memory Usage: 44.8 MB, less than 36.89% of JavaScript online submissions for Make The String Great.
    https://leetcode.com/submissions/detail/809476184/
        Runtime: 132 ms, faster than 20.87% of JavaScript online submissions for Make The String Great.
        Memory Usage: 45.6 MB, less than 19.90% of JavaScript online submissions for Make The String Great.

 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    let codes = s.split("").map(c => c.charCodeAt());
    let len = s.length - 1;
    let i = 0;
    
    while(i < len)
        if( (codes[i]+32 === codes[i+1]) || (codes[i]-32 === codes[i+1]) )
            codes.splice(i--, 2);
        else
            i++;
    
    return String.fromCharCode(...codes);
};