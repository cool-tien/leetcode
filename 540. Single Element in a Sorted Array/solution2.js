/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let solo = 0;
    
    for(let num of nums)
        solo ^= num;
    return solo;
};