/**
    https://leetcode.com/submissions/detail/694814240/
    Runtime: 149 ms, faster than 55.22% of JavaScript online submissions for Array Partition I.
    Memory Usage: 47 MB, less than 93.20% of JavaScript online submissions for Array Partition I.

 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    let total = 0;
    nums.sort((a,b) => a-b);
    
    for(let i=0; i<nums.length; i+=2)
        total += Math.min(nums[i], nums[i+1] || Infinity);
    return total;
};