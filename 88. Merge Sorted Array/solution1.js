/**
    https://leetcode.com/submissions/detail/716136751/
    Runtime: 118 ms, faster than 7.29% of JavaScript online submissions for Merge Sorted Array.
    Memory Usage: 41.9 MB, less than 85.21% of JavaScript online submissions for Merge Sorted Array.

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    nums1.push(...nums2.slice(0, n));
    nums1.sort((a,b)=>a-b);
};