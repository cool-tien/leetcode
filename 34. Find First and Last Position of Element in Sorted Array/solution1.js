/**
    O(n)
    69~80 ms, faster than 64.61~85.49%

    https://leetcode.com/submissions/detail/755926735/
    Runtime: 69 ms, faster than 85.49% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
    Memory Usage: 42.8 MB, less than 27.56% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
};