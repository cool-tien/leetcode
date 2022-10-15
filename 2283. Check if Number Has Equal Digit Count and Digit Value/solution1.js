/**
    O(2n)
    111~116 ms   (30.29%~39.00%)
    42.0~42.2 MB (71.78%~85.89%)
    
    https://leetcode.com/submissions/detail/822773045/
        Runtime: 115 ms, faster than 31.95% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
        Memory Usage: 42.2 MB, less than 71.78% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
    https://leetcode.com/submissions/detail/822774258/
        Runtime: 111 ms, faster than 39.00% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
        Memory Usage: 42 MB, less than 85.89% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
    https://leetcode.com/submissions/detail/822774368/
        Runtime: 116 ms, faster than 30.29% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.
        Memory Usage: 42 MB, less than 85.89% of JavaScript online submissions for Check if Number Has Equal Digit Count and Digit Value.

 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    let arr = new Array(10).fill(0);
    
    for(let c of num)
        arr[~~c]++;
    
    for(let i=0; i<num.length; i++)
        if(arr[i] !== ~~num[i])
            return false;
    return true;
};