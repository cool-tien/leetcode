/**
	https://leetcode.com/submissions/detail/641858521/
	Runtime: 74 ms, faster than 91.37% of JavaScript online submissions for Single Number.
	Memory Usage: 43.3 MB, less than 54.02% of JavaScript online submissions for Single Number.
	
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((a,b)=>a^b, 0);
};