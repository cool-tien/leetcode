/**
    https://leetcode.com/submissions/detail/700572922/
    Runtime: 267 ms, faster than 49.39% of JavaScript online submissions for Find Triangular Sum of an Array.
    Memory Usage: 48.7 MB, less than 47.19% of JavaScript online submissions for Find Triangular Sum of an Array.

 * @param {number[]} nums
 * @return {number}
 */
 var triangularSum = function(nums) {
    while(nums.length != 1){
        let temp = nums[0];
        
        for(let i=0; i<nums.length-1; i++)
            [nums[i], temp] = [(temp + nums[i+1]) % 10, nums[i+1]];
        nums.pop();
    }
    
    return nums[0];
};