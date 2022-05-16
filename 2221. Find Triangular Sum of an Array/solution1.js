/**
    https://leetcode.com/submissions/detail/700568265/
    Runtime: 319 ms, faster than 26.89% of JavaScript online submissions for Find Triangular Sum of an Array.
    Memory Usage: 48.6 MB, less than 53.79% of JavaScript online submissions for Find Triangular Sum of an Array.

 * @param {number[]} nums
 * @return {number}
 */
 var triangularSum = function(nums) {
    while(nums.length != 1){
        let arr = [];
        
        for(let i=0; i<nums.length-1; i++)
            arr.push((nums[i] + nums[i+1]) % 10);
        nums = [...arr];
    }
    
    return nums[0];
};