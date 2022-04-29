/**
    https://leetcode.com/submissions/detail/689456032/
    Runtime: 58 ms, faster than 95.32% of JavaScript online submissions for Keep Multiplying Found Values by Two.
    Memory Usage: 42.6 MB, less than 68.97% of JavaScript online submissions for Keep Multiplying Found Values by Two.

 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    while(nums.includes(original)){
        nums = nums.filter(x=>x>original && x%original==0);
        original *= 2;
    }
    
    return original;
};