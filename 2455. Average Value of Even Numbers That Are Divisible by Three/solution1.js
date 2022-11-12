/**
    O(2n)
    65~98 ms     (64.12%~95.49%)
    42.4~42.6 MB (71.57%~89.22%)

    https://leetcode.com/submissions/detail/838382234/
        Runtime: 69 ms, faster than 92.16% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
        Memory Usage: 42.6 MB, less than 71.57% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
    https://leetcode.com/submissions/detail/838392530/
        Runtime: 98 ms, faster than 64.12% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
        Memory Usage: 42.4 MB, less than 89.22% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
    https://leetcode.com/submissions/detail/838392611/
        Runtime: 65 ms, faster than 95.49% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
        Memory Usage: 42.6 MB, less than 78.04% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.

 * @param {number[]} nums
 * @return {number}
 */
 var averageValue = function(nums) {
    let filter_list = nums.filter(num => ( (num % 2)===0 && (num % 3)===0 ));
    let sum = filter_list.reduce((a, b) => a + b, 0);
    
    return ~~(sum / filter_list.length) || 0;
};