/**
 * @param {number[]} nums
 * @return {number}
 
    Refer other solution
 */
var maximumDifference = function(nums) {
    let min = Infinity;
    let max_diff = 0;
    
    for(let num of nums)
        if(min>num)
            min = num;
        else
            max_diff = Math.max(max_diff, num-min);
    return max_diff==0?-1:max_diff;
};