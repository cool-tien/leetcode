/**
    https://leetcode.com/submissions/detail/689014718/
    Runtime: 70 ms, faster than 75.05% of JavaScript online submissions for Search in Rotated Sorted Array II.
    Memory Usage: 43.8 MB, less than 17.36% of JavaScript online submissions for Search in Rotated Sorted Array II.

 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 const search = (nums, target) => new Set(nums).has(target);