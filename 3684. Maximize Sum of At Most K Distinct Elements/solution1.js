/*
  https://leetcode.com/problems/maximize-sum-of-at-most-k-distinct-elements/submissions/1792829148/
    Runtime 3 ms Beats 97.27%
    Memory 58.70 MB Beats 32.55%
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxKDistinct = (nums, k) => [...new Set(nums)].sort((a, b) => b - a).slice(0, k);