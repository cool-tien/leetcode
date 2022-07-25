/**
    O(2n)
    101~110 ms

    https://leetcode.com/submissions/detail/756013653/
    https://leetcode.com/submissions/detail/756013463/
    https://leetcode.com/submissions/detail/756012848/
    
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    let result = [];
    nums.sort((a, b) => a-b);
    
    for(let i=0; i<nums.length; i++)
        if(target < nums[i])
            break;
        else if(target==nums[i])
            result.push(i);
    return result;
};