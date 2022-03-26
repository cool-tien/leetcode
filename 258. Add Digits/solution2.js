/**
	https://leetcode.com/submissions/detail/638336332/
	Runtime: 93 ms, faster than 67.68% of JavaScript online submissions for Add Digits.
	Memory Usage: 43.4 MB, less than 56.12% of JavaScript online submissions for Add Digits.
	
 * @param {number} num
 * @return {number}
 */

const addDigits = num => num==0? 0: num%9? num%9: 9;