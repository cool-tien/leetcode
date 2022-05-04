/**
    https://leetcode.com/submissions/detail/692140194/
    Runtime: 97 ms, faster than 62.50% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
    Memory Usage: 46.8 MB, less than 20.63% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.

 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let original = [...nums];
    nums.sort((a, b)=>a-b);
    
    while(start<=end && nums[start] == original[start])
        start++;
    while(start<=end && nums[end] == original[end])
        end--;
    
    return original.slice(start, end + 1).length;
};