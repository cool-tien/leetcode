/*
  https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/submissions/1778611900/
    Runtime 2 ms Beats 48.75%
    Memory 56.14 MB Beats 61.25%
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    
  for(let i=0; i<nums.length; i++){
    const sum = ("" + nums[i]).split("").map(c => ~~c).reduce((a, b) => a + b, 0);

    if(sum === i) return i;
  }
  
  return -1;
};