/**
    O(n)
    113~128 ms   (35.20%~63.60%)
    45.3~45.7 MB (58.40%~82.40%)

    https://leetcode.com/submissions/detail/826997079/
        Runtime: 113 ms, faster than 63.60% of JavaScript online submissions for Largest Odd Number in String.
        Memory Usage: 45.3 MB, less than 82.40% of JavaScript online submissions for Largest Odd Number in String.
    https://leetcode.com/submissions/detail/826999334/
        Runtime: 114 ms, faster than 61.20% of JavaScript online submissions for Largest Odd Number in String.
        Memory Usage: 45.7 MB, less than 58.40% of JavaScript online submissions for Largest Odd Number in String.
    https://leetcode.com/submissions/detail/826999522/
        Runtime: 128 ms, faster than 35.20% of JavaScript online submissions for Largest Odd Number in String.
        Memory Usage: 45.6 MB, less than 63.60% of JavaScript online submissions for Largest Odd Number in String.

 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
    for(let i=num.length-1; i>=0; i--)
        if( (+num[i]) % 2 === 1 )
            return num.substring(0, i+1);
    return "";
};