/**
    https://leetcode.com/submissions/detail/691328225/
    Runtime: 67 ms, faster than 98.69% of JavaScript online submissions for Sort Array By Parity.
    Memory Usage: 45 MB, less than 35.74% of JavaScript online submissions for Sort Array By Parity.

 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let res = [];
    
    for(let i=0; i<nums.length; i++)
        (nums[i]%2 == 0)? res.unshift(nums[i]): res.push(nums[i]);
    return res;
};