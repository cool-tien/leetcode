/**
    https://leetcode.com/submissions/detail/689458943/
    Runtime: 70 ms, faster than 72.91% of JavaScript online submissions for Keep Multiplying Found Values by Two.
    Memory Usage: 43.6 MB, less than 51.23% of JavaScript online submissions for Keep Multiplying Found Values by Two.

 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    let set = new Set(nums.filter(x=>x%original==0));
    
    while(set.has(original))
        original *= 2;
    return original;
};