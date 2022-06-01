/**
    https://leetcode.com/submissions/detail/711747169/
    Runtime: 65 ms, faster than 86.09% of JavaScript online submissions for Running Sum of 1d Array.
    Memory Usage: 42.6 MB, less than 36.77% of JavaScript online submissions for Running Sum of 1d Array.

 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    for(let i=1; i<nums.length; i++)
        nums[i] = nums[i-1] + nums[i];
    return nums;
};