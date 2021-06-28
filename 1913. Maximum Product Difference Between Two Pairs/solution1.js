/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max1 = Math.max(...nums);
    let min1 = Math.min(...nums);
    
    nums.splice(nums.indexOf(max1), 1);
    nums.splice(nums.indexOf(min1), 1);
    
    let max2 = Math.max(...nums);
    let min2 = Math.min(...nums);
    
    return (max1*max2) - (min1*min2);
};