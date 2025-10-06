/*
  https://leetcode.com/problems/compute-alternating-sum/submissions/1792860458/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
  let ttl_even = 0;
  let ttl_odd = 0;

  for(let i=0; i<nums.length; i++)
    (i % 2)? 
      ttl_odd += nums[i]: 
      ttl_even += nums[i];
  
  return ttl_even - ttl_odd;
};