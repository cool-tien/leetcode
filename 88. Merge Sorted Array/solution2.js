/**
    https://leetcode.com/submissions/detail/716159725/
    Runtime: 82 ms, faster than 46.25% of JavaScript online submissions for Merge Sorted Array.
    Memory Usage: 42.1 MB, less than 67.86% of JavaScript online submissions for Merge Sorted Array.

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    for(let i=0; i<n; i++)
        nums1[m+i] = nums2[i];
    nums1.sort((a,b)=>a-b);
};