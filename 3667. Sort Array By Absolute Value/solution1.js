/*
  https://leetcode.com/problems/sort-array-by-absolute-value/submissions/1779695764/
    Runtime 5 ms Beats 55.32%
    Memory 56.20 MB Beats 95.74%

  # Approach
  1. Built-in sort with Math.abs().
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortByAbsoluteValue = (nums) => nums.sort((a, b) => Math.abs(a) - Math.abs(b));