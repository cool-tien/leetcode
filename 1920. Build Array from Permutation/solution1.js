/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let res = [];
    
    for(let num of nums)
        res.push(nums[num]);
    return res;
};