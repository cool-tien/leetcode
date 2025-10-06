/*
  https://leetcode.com/problems/library-late-fee-calculator/submissions/1792782007/
    Runtime 1 ms Beats 58.82%
    Memory 55.69 MB Beats 61.76% 
*/
/**
 * @param {number[]} daysLate
 * @return {number}
 */
const lateFee = daysLate => 
  daysLate.reduce((acc, cur) => 
    acc + (
      (cur === 1)? 
      1: (cur >= 2 && cur <=5)? 
      cur * 2: cur * 3
    )
  , 0);