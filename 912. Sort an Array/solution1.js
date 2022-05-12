/**
    https://leetcode.com/submissions/detail/698121707/
    Runtime: 121 ms, faster than 96.64% of JavaScript online submissions for Sort an Array.
    Memory Usage: 53.8 MB, less than 62.75% of JavaScript online submissions for Sort an Array.

 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    return nums.sort((a,b) => a-b);
};