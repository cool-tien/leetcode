/**
    https://leetcode.com/submissions/detail/708044795/
    Runtime: 69 ms, faster than 71.04% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
    Memory Usage: 44.2 MB, less than 5.03% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.

 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let count = 0;
    
    while(num)
        [num, count] = [num%2==0? num/2: num-1, count+1];
    return count;
};