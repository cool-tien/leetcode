/**
	https://leetcode.com/submissions/detail/645699882/
	Runtime: 75 ms, faster than 85.43% of JavaScript online submissions for Majority Element.
	Memory Usage: 46.3 MB, less than 5.30% of JavaScript online submissions for Majority Element.

 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => nums.sort((a,b)=>a-b)[~~(nums.length/2)];