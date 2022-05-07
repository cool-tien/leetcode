/**
    [refer netizens]
    https://leetcode.com/submissions/detail/694815583/
    Runtime: 132 ms, faster than 75.00% of JavaScript online submissions for Array Partition I.
    Memory Usage: 47 MB, less than 95.09% of JavaScript online submissions for Array Partition I.

 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    let total = 0;
    nums.sort((a,b) => a-b);
    
    for(let i=0; i<nums.length; i+=2)
        total += nums[i];
    return total;
};