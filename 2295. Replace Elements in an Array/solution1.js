/**
    https://leetcode.com/submissions/detail/743884010/
    Runtime: 358 ms, faster than 84.26% of JavaScript online submissions for Replace Elements in an Array.
    Memory Usage: 107.2 MB, less than 30.82% of JavaScript online submissions for Replace Elements in an Array.

 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
 var arrayChange = function(nums, operations) {
    let hash = {};
    
    for(let i=0; i<nums.length; i++)
        hash[nums[i]] = i;
    
    for(let arr of operations){
        let idx = hash[arr[0]];
        
        nums[idx] = arr[1];
        delete hash[arr[0]];
        hash[arr[1]] = idx;
    }
    
    return nums;
};