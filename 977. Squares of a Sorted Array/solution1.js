/**
	https://leetcode.com/submissions/detail/649662101/
	Runtime: 116 ms, faster than 83.87% of JavaScript online submissions for Squares of a Sorted Array.
	Memory Usage: 47.7 MB, less than 49.46% of JavaScript online submissions for Squares of a Sorted Array.
	
	
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => nums.map(x=>x*x).sort((a,b)=>a-b);