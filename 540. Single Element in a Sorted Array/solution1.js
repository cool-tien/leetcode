/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    return nums.reduce((a,b)=>a^b);
};