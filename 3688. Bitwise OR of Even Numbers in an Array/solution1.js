/*
  https://leetcode.com/problems/bitwise-or-of-even-numbers-in-an-array/submissions/1792789380/
    Runtime 0 ms Beats 100.00%
    Memory 55.52 MB Beats 70.39%
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const evenNumberBitwiseORs = nums => nums.filter(x => x % 2 === 0).reduce((acc, cur) => (acc | cur), 0);